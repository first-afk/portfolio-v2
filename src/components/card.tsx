import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CardModal } from "./card-modal";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?: string;
  image?: string;
  id?: string;
  category?: string;
  title?: string;
  description?: string;
  url?: string;
}

export function Card({
  bg,
  image,
  id,
  category,
  title,
  description,
  url,
  className,
  children,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasDetails = Boolean(id && title && description);

  const openModal = () => {
    if (hasDetails) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        className={`work-card ${bg} relative flex  items-center justify-center ${className} shadow-2xl`}
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
          }
        }}
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
      >
        <img
          src="/images/tape2.png"
          className="tape-graphic h-12 w-50"
          alt="tape"
        />
        {id && (
          <div>
            <div
              className={`relative flex flex-col items-center gap-4 py-10 text-center`}
            >
              <p className="self-end font-playfair italic text-lg tracking-wide px-2">
                {id}
              </p>

              <div className="torn-image-container w-full h-fit px-4 -mt-2">
                <img
                  src={`/images/${image}`}
                  alt=""
                  className="torn-image h-36 w-64 "
                />
              </div>

              <div className="flex flex-col items-start justify-start px-6 py-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em]">
                  {category}
                </p>
                <h3 className="font-playfair text-3xl italic">{title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-left line-clamp-2">
                  {description}
                </p>
              </div>
              <hr className="my-2 w-[80%] border-current/30" />
              <p className="mt-auto">
                <a
                  className="font-mono text-xs uppercase tracking-widest underline underline-offset-4"
                  href={url}
                >
                  View case &rarr;
                </a>
              </p>
            </div>
          </div>
        )}
        {children}
      </article>
      {isModalOpen &&
        createPortal(
          <CardModal
            id={id ?? ""}
            category={category ?? ""}
            title={title ?? ""}
            description={description ?? ""}
            image={image}
            url={url}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}
