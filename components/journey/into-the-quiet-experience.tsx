"use client";

import Link from "next/link";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  chapterFromProgress,
  chapterIndexFromProgress,
  intoTheQuietChapters,
  intoTheQuietForeground,
  intoTheQuietPlaybackMs,
  intoTheQuietScenes,
  progressFromChapterId,
} from "@/lib/journeys/into-the-quiet";
import { routes } from "@/lib/site";

const depthIntensity = 1;

function subscribeReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function IntoTheQuietExperience() {
  const systemReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const lastFrameRef = useRef(0);
  const playingRef = useRef(false);

  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [chapterIndex, setChapterIndex] = useState(0);

  const motionReduced = systemReducedMotion || reduceMotion;
  const chapter = intoTheQuietChapters[chapterIndex];
  const sceneProgress = progress / 50;

  const stopPlayback = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    lastFrameRef.current = 0;
  }, []);

  const syncHash = useCallback((value: number) => {
    const nextChapter = chapterFromProgress(value);
    const nextHash = `#${nextChapter.id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, []);

  const applyProgress = useCallback(
    (value: number, updateHash = true) => {
      const clamped = Math.max(0, Math.min(100, value));
      setProgress(clamped);
      setChapterIndex(chapterIndexFromProgress(clamped));
      if (updateHash) {
        syncHash(clamped);
      }
    },
    [syncHash],
  );

  useEffect(() => {
    setReduceMotion(systemReducedMotion);
  }, [systemReducedMotion]);

  useEffect(() => {
    if (motionReduced) {
      stopPlayback();
      setPointer({ x: 0, y: 0 });
    }
  }, [motionReduced, stopPlayback]);

  useEffect(() => {
    const initial = progressFromChapterId(window.location.hash.slice(1));
    if (initial !== null) {
      applyProgress(initial, false);
    }
  }, [applyProgress]);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    if (!playing || motionReduced) {
      return;
    }

    const tick = (time: number) => {
      if (!playingRef.current) {
        return;
      }

      if (lastFrameRef.current) {
        const delta = Math.min(time - lastFrameRef.current, 60);
        setProgress((current) => {
          const next = Math.min(100, current + (delta / intoTheQuietPlaybackMs) * 100);
          setChapterIndex(chapterIndexFromProgress(next));
          syncHash(next);
          if (next >= 100) {
            stopPlayback();
          }
          return next;
        });
      }

      lastFrameRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    lastFrameRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
      lastFrameRef.current = 0;
    };
  }, [playing, motionReduced, stopPlayback, syncHash]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) {
        stopPlayback();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [stopPlayback]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          stopPlayback();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, [stopPlayback]);

  const depth = motionReduced ? 0 : depthIntensity;
  const { x: px, y: py } = pointer;

  const cameraStyle: CSSProperties = {
    transform: `rotateX(${-py * 0.8 * depth}deg) rotateY(${px * 1.2 * depth}deg)`,
  };

  const atmosphereStyle: CSSProperties = {
    transform: `translate3d(${px * 18 * depth + progress * 0.18 * depth}px, ${py * 8 * depth}px, 0)`,
    opacity: motionReduced ? 0 : 0.8,
  };

  const foregroundStyle: CSSProperties = {
    backgroundImage: `url(${intoTheQuietForeground.image.src})`,
    opacity: Math.max(0, 1 - sceneProgress * 1.45),
    transform: `translate3d(${-px * 30 * depth}px, ${-py * 18 * depth}px, ${20 * depth}px) scale(${1.03 + Math.min(1, sceneProgress) * 0.65 * depth})`,
  };

  const sceneStyles = intoTheQuietScenes.map((_, index) => {
    const local = Math.max(0, Math.min(1, sceneProgress - index + 0.5));
    const opacity = motionReduced
      ? index === chapterIndex
        ? 1
        : 0
      : Math.max(0, 1 - Math.abs(sceneProgress - index));

    return {
      backgroundImage: `url(${intoTheQuietScenes[index].image.src})`,
      opacity,
      transform: `translate3d(${-px * 10 * depth}px, ${-py * 6 * depth}px, 0) scale(${1.06 + local * 0.28 * depth})`,
    } satisfies CSSProperties;
  });

  const playLabel = motionReduced
    ? progress >= 100
      ? "Back to the forest ↺"
      : "Next chapter →"
    : playing
      ? "Pause journey Ⅱ"
      : progress >= 100
        ? "Walk again ↺"
        : "Walk forward →";

  const handlePlay = () => {
    if (motionReduced) {
      const next =
        progress >= 100 ? 0 : Math.min(100, (Math.floor(progress / 50) + 1) * 50);
      stopPlayback();
      applyProgress(next);
      return;
    }

    if (playing) {
      stopPlayback();
      return;
    }

    if (progress >= 100) {
      applyProgress(0);
    }
    lastFrameRef.current = 0;
    playingRef.current = true;
    setPlaying(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (motionReduced) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    setPointer({ x, y });
  };

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  return (
    <article className="bg-[#10241f] text-cream">
      <div
        className="on-hero relative isolate overflow-hidden"
        aria-label="Into the Quiet interactive journey"
      >
        <div className="pointer-events-none absolute inset-0 touch-pan-y perspective-[900px]">
          <div
            className="absolute -inset-[5%] [transform-style:preserve-3d] will-change-transform"
            style={cameraStyle}
          >
            {intoTheQuietScenes.map((scene, index) => (
              <div
                key={scene.alt}
                role="img"
                aria-label={scene.alt}
                className="absolute inset-0 bg-cover bg-center will-change-[transform,opacity] backface-hidden"
                style={sceneStyles[index]}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-[25%_-10%_-15%] will-change-transform"
              style={{
                ...atmosphereStyle,
                background:
                  "radial-gradient(ellipse at 60% 60%, rgb(218 228 220 / 19%), transparent 60%)",
              }}
            />
            <div
              className="pointer-events-none absolute -inset-[3%] bg-cover bg-center will-change-[transform,opacity]"
              style={foregroundStyle}
              role="img"
              aria-hidden="true"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgb(7 26 19 / 28%), transparent 22%, transparent 70%, rgb(7 26 19 / 28%)), linear-gradient(90deg, rgb(7 26 19 / 18%), transparent 60%)",
            }}
          />
        </div>

        <div
          ref={stageRef}
          className="relative h-[72vh] min-h-[560px] md:h-[78vh]"
          aria-label="Landscape scene with optional depth movement"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <h1 className="sr-only">
            {chapter.titleLine} the {chapter.titleEmphasis}
          </h1>
          <p className="sr-only" aria-live="polite">
            Chapter {chapter.number}, {chapter.place}. {chapter.description}
          </p>
          <div className="absolute inset-x-[6%] top-6 flex justify-end pt-14 md:top-7 md:pt-16">
            <Link
              href={routes.home}
              className="inline-flex min-h-11 items-center py-2 text-xs text-cream"
              onClick={stopPlayback}
            >
              Exit journey
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="relative bg-transparent px-[6%] pt-6 pb-5">
          <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-7">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-7 bg-paper px-5 py-3.5 text-xs tracking-[0.02em] text-pine hover:bg-cream"
              onClick={handlePlay}
            >
              {playLabel}
            </button>
            <label className="inline-flex min-h-11 items-center gap-2 text-[0.6875rem]">
              <input
                type="checkbox"
                className="size-4 accent-[#e5dcc5]"
                checked={reduceMotion}
                onChange={(event) => {
                  stopPlayback();
                  setPointer({ x: 0, y: 0 });
                  setReduceMotion(event.target.checked);
                }}
              />
              Reduce motion
            </label>
            <span className="text-[0.625rem] tracking-[0.06em] tabular-nums md:ml-auto">
              {Math.round(progress)}% explored
            </span>
          </div>

          <label htmlFor="journey-travel" className="mb-1.5 block text-[0.6875rem]">
            Move through the landscape
          </label>
          <input
            id="journey-travel"
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            aria-valuetext={`${chapter.place}, ${Math.round(progress)} percent explored`}
            className="block h-6 w-full cursor-pointer accent-[#d4c6a4] md:h-6"
            onChange={(event) => {
              stopPlayback();
              applyProgress(Number(event.target.value));
            }}
          />

          <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
            {intoTheQuietChapters.map((item) => {
              const pressed = item.anchor === chapterIndex * 50;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={pressed}
                  className="min-h-11 border-b border-white/20 py-2 text-left text-[0.625rem] leading-relaxed aria-pressed:border-[#e5dcc5]"
                  onClick={() => {
                    stopPlayback();
                    applyProgress(item.anchor);
                  }}
                >
                  <span className="block text-[0.5625rem] opacity-70">{item.number}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-paper px-[6%] py-14 text-center text-ink md:py-[3.625rem]">
        <p className="kicker">One world. Three perspectives.</p>
        <h2 className="section-title mx-auto mt-4">
          Let the landscape
          <br />
          <em>come to you.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          A quiet passage through imagined places.
          <br />
          Pause anywhere. Look a little longer.
        </p>
        <p className="mt-6">
          <Link href={routes.mossveilForest} className="text-action">
            Read the Mossveil story
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
    </article>
  );
}
