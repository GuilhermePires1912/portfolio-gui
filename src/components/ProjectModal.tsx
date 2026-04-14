import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AdvertisingProject, TranslationStrings, Language } from '../types';

interface ProjectModalProps {
  project: AdvertisingProject;
  t: TranslationStrings;
  language: Language;
  onClose: () => void;
}

// ── VideoPlayer with real frame thumbnail ────────────────────────────────────
interface VideoPlayerProps {
  src: string;
  fallbackPoster: string;
  vertical?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, fallbackPoster, vertical }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  // When metadata loads, seek to 2s to capture a real frame as thumbnail
  const onLoadedMetadata = useCallback(() => {
    const v = videoRef.current;
    if (!v || playing) return;
    const seekTo = Math.min(2, (v.duration || 10) * 0.08);
    v.currentTime = seekTo;
  }, [playing]);

  // Frame is decoded and rendered in the video element
  const onSeeked = useCallback(() => {
    if (!playing) setFrameReady(true);
  }, [playing]);

  const handlePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, []);

  return (
    <div className={`vp-wrap${vertical ? ' vp-vertical' : ''}`}>
      {/* Video element — always present; acts as thumbnail before play */}
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        muted
        playsInline
        controls={playing}
        onLoadedMetadata={onLoadedMetadata}
        onSeeked={onSeeked}
        className={`vp-video-el${playing ? ' vp-playing' : ''}`}
      />

      {/* Overlay shown before play */}
      {!playing && (
        <div className="vp-cover" onClick={handlePlay}>
          {/* Fallback KV shown while video frame loads */}
          {!frameReady && (
            <img src={fallbackPoster} alt="" className="vp-fallback" />
          )}
          <div className="vp-overlay" />
          <button className="vp-play-btn" aria-label="Play" tabIndex={-1}>
            <div className="vp-play-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

// ── Modal ────────────────────────────────────────────────────────────────────
export const ProjectModal: React.FC<ProjectModalProps> = ({
  project, t, language, onClose
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const title = language === 'pt' ? project.titlePt : project.titleEn;
  const category = language === 'pt' ? project.categoryPt : project.categoryEn;
  const description = language === 'pt' ? project.descriptionPt : project.descriptionEn;
  const fallback = project.thumbnail;

  const validPrincipal = project.principalVideos.filter((v): v is string => !!v);
  const validSocial = project.socialVideos.filter((v): v is string => !!v);
  const allPrincipalNull = project.principalVideos.every(v => !v);
  const allSocialNull = project.socialVideos.every(v => !v);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  const isVertical = (src: string) =>
    /9x16|9X16|vertical|Vert|portrait|Portrait|reels|Reels|tiktok|TikTok/i.test(src);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" ref={backdropRef} onClick={handleBackdropClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <button className="modal-close" onClick={onClose} aria-label={t.work.close}>✕</button>

        {/* Hero KV */}
        <div className="modal-hero">
          <img src={project.thumbnail} alt={title} loading="lazy" />
          <div className="modal-hero-overlay" />
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-tag category">{category}</span>
            <span className="modal-tag client">{project.client}</span>
            <span className="modal-tag year">{project.year}</span>
          </div>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-desc">{description}</p>

          {/* ── Special Action */}
          {project.specialAction && (
            <div className="special-action">
              <div className="modal-section-title">
                ★ {t.work.specialAction} — {language === 'pt'
                  ? project.specialAction.titlePt
                  : project.specialAction.titleEn}
              </div>
              <p className="special-action-desc">
                {language === 'pt'
                  ? project.specialAction.descriptionPt
                  : project.specialAction.descriptionEn}
              </p>
              {project.specialAction.images.length > 0 && (
                <div className="special-image-grid">
                  {project.specialAction.images.map((img, i) => (
                    <img key={i} src={img} alt={`Special ${i + 1}`} loading="lazy" />
                  ))}
                </div>
              )}
              {project.specialAction.videos.some(v => !!v) && (
                <div className="video-list" style={{ marginTop: 16 }}>
                  {project.specialAction.videos.filter((v): v is string => !!v).map((v, i) => (
                    <VideoPlayer key={i} src={v} fallbackPoster={project.specialAction!.images[0] || fallback} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── VLT Project */}
          {project.vltProject && (
            <div className="vlt-section">
              <div className="modal-section-title">
                ◆ {t.work.vltProject} — {language === 'pt'
                  ? project.vltProject.titlePt
                  : project.vltProject.titleEn}
              </div>
              <p className="special-action-desc">
                {language === 'pt'
                  ? project.vltProject.descriptionPt
                  : project.vltProject.descriptionEn}
              </p>
              {project.vltProject.images.length > 0 && (
                <div className="vlt-image-grid">
                  {project.vltProject.images.map((img, i) => (
                    <img key={i} src={img} alt={`VLT ${i + 1}`} loading="lazy" />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Principal Videos */}
          <div className="modal-section">
            <div className="modal-section-title">▶ {t.work.principal}</div>
            {allPrincipalNull ? (
              <div className="video-coming-soon">{t.work.noVideoYet}</div>
            ) : (
              <div className="video-list">
                {validPrincipal.map((v, i) => (
                  <VideoPlayer key={i} src={v} fallbackPoster={fallback} />
                ))}
              </div>
            )}
          </div>

          {/* ── Social & Digital */}
          <div className="modal-section">
            <div className="modal-section-title">◈ {t.work.socialDigital}</div>
            {allSocialNull ? (
              <div className="video-coming-soon">{t.work.noVideoYet}</div>
            ) : (
              <div className="social-video-grid">
                {validSocial.map((v, i) => (
                  <VideoPlayer key={i} src={v} fallbackPoster={fallback} vertical={isVertical(v)} />
                ))}
              </div>
            )}
          </div>

          {/* ── KV Gallery */}
          {project.kvImages.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">◉ {t.work.kvGallery}</div>
              <div className="kv-gallery">
                {project.kvImages.map((img, i) => (
                  <img key={i} src={img} alt={`KV ${i + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
