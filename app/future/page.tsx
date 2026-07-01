import { GeometricMesh, BlueprintNodes, HexagonWatermark } from "@/components/ui/MathGraphics";

export const metadata = {
  title: "Future of Ganitra",
  description: "Explore our roadmap and vision for the future of visual mathematics education.",
};

export default function FuturePage() {
  const patternMap = [GeometricMesh, BlueprintNodes, HexagonWatermark];

  return (
    <div className="relative overflow-hidden bg-surface py-16 sm:py-20">
      {/* Mathematical background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="future-bg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#F59E0B" fillOpacity="0.3" />
                <line x1="0" y1="40" x2="80" y2="40" stroke="#F59E0B" strokeOpacity="0.15" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="#F59E0B" strokeOpacity="0.15" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#future-bg)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="scroll-mt-24 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Future Roadmap
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Our vision for expanding visual mathematics education.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Digital Platform", "Teacher Resources", "Community"].map((title, i) => {
            const descriptions = [
              "Interactive digital versions of our textbooks with animated diagrams and guided explorations.",
              "Comprehensive guides and materials to help educators bring visual mathematics into their classrooms.",
              "Building a community of learners and educators passionate about visual mathematics.",
            ];
            const PatternComponent = patternMap[i];
            const colors = ["text-discovery", "text-insight", "text-application"];
            const bgColors = ["bg-discovery/20", "bg-insight/20", "bg-application/20"];
            const borderColors = ["border-discovery/20", "border-insight/20", "border-application/20"];

            return (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-xl border ${borderColors[i]} bg-surface-raised p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
              >
                {/* Card-specific mathematical pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <PatternComponent className="h-full w-full" />
                </div>

                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgColors[i]} ${colors[i]}`}>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {i === 0 && (
                        <>
                          <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                          <line x1="8" y1="16" x2="40" y2="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                          <line x1="16" y1="8" x2="16" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                          <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.4" />
                          <line x1="24" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                          <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                          <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                          <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                          <line x1="24" y1="18" x2="14" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                          <line x1="24" y1="18" x2="34" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-primary">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {descriptions[i]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
