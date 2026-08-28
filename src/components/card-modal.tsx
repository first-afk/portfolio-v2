import type { MouseEvent } from "react";

type CardModalProps = {
  id: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  onClose: () => void;
};

export function CardModal({
  id,
  category,
  title,
  description,
  image,
  url,
  onClose,
}: CardModalProps) {
  const closeOnBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-6 backdrop-blur-sm"
      role="presentation"
      onClick={closeOnBackdropClick}
    >
      <div
        className="relative w-full max-w-xl bg-primary p-6 text-secondary shadow-2xl md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`card-modal-title-${id}`}
      >
        <button
          type="button"
          className="absolute right-4 top-3 font-mono text-2xl leading-none"
          aria-label="Close project details"
          onClick={onClose}
        >
          &times;
        </button>

        {image && (
          <img
            src={`/images/${image}`}
            alt=""
            className="mb-6 h-48 w-full object-cover md:h-64"
          />
        )}

        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          {id} / {category}
        </p>
        <h2
          id={`card-modal-title-${id}`}
          className="mt-2 font-playfair text-4xl italic"
        >
          {title}
        </h2>
        <p className="mt-5 text-sm leading-relaxed">{description}</p>

        {url && (
          <a
            className="mt-8 inline-block font-mono text-xs uppercase tracking-widest underline underline-offset-4"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            View case &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
