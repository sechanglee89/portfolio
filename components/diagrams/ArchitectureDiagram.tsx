interface ArchitectureDiagramProps {
  project: "blice" | "kogreen";
  className?: string;
}

export function ArchitectureDiagram({
  project,
  className = "",
}: ArchitectureDiagramProps) {
  const imageUrl =
    project === "blice"
      ? "/diagrams/blice-architecture.png"
      : "/diagrams/kogreen-architecture.png";
  const altText =
    project === "blice"
      ? "블라이스 시스템 아키텍처"
      : "한국그린전력 시스템 아키텍처";

  return (
    <div className={className}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto max-w-full bg-white p-2 rounded-lg border border-slate-200"
      />
    </div>
  );
}
