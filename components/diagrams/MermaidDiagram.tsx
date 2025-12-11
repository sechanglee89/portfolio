import { useEffect, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  id: string;
  className?: string;
}

// Mermaid 초기화 (한 번만)
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#e0f2fe",
    primaryTextColor: "#1e293b",
    primaryBorderColor: "#0ea5e9",
    lineColor: "#64748b",
    secondaryColor: "#f1f5f9",
    secondaryTextColor: "#1e293b",
    tertiaryColor: "#ffffff",
    tertiaryTextColor: "#1e293b",
    background: "#ffffff",
    mainBkg: "#ffffff",
    secondaryBkg: "#f8fafc",
    tertiaryBkg: "#f1f5f9",
    nodeBorder: "#cbd5e1",
    clusterBkg: "#f8fafc",
    clusterBorder: "#94a3b8",
    titleColor: "#1e293b",
    edgeLabelBackground: "#ffffff",
    edgeLabelText: "#1e293b",
    nodeTextColor: "#1e293b",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 15,
    nodeSpacing: 50,
    rankSpacing: 50,
  },
  securityLevel: "loose",
});

export function MermaidDiagram({
  chart,
  id,
  className = "",
}: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const renderDiagram = async () => {
      setLoading(true);
      setError("");
      try {
        console.log("Rendering Mermaid diagram:", id);
        console.log("Chart content:", chart.substring(0, 100) + "...");

        // Mermaid 렌더링
        const result = await mermaid.render(`mermaid-${id}`, chart);
        console.log(
          "Mermaid render success:",
          id,
          "SVG length:",
          result.svg.length
        );

        setSvg(result.svg);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        console.error("Mermaid rendering error:", errorMessage, err);
        setError(errorMessage);
        setLoading(false);
      }
    };

    renderDiagram();
  }, [chart, id]);

  if (loading) {
    return (
      <div className={`mermaid-container ${className}`}>
        <div className="flex items-center justify-center p-8 text-gray-500">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p>다이어그램 로딩 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`mermaid-container ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded p-4 text-red-800">
          <p className="font-semibold">다이어그램 렌더링 오류</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`mermaid-container ${className}`}>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-yellow-800">
          <p className="font-semibold">다이어그램이 비어있습니다</p>
          <p className="text-sm mt-1">
            SVG가 생성되지 않았습니다. 콘솔을 확인하세요.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mermaid-container ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
