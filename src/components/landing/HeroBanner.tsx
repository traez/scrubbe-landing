const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full min-w-[280px] mx-auto my-8 px-4">
      {/* Dashboard Preview */}
      <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden bg-[#0f172a] border border-white/10 h-[400px]">
        {/* Dashboard Header */}
        <div className="bg-[#1e293b] py-3 px-6 flex items-center border-b border-white/10">
          <div className="flex gap-2 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          </div>
          <div className="text-sm font-semibold text-slate-50 ml-2">
            Scrubbe Security Dashboard
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-4 grid grid-cols-2 grid-rows-2 gap-4 h-[calc(100%-45px)]">
          {/* Threat Distribution Card */}
          <div className="bg-white/[0.03] rounded-md p-4 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-3 text-sm text-white/70">
              <div className="font-semibold">Threat Distribution</div>
              <div>•••</div>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="relative w-[80px] h-[80px] rounded-full bg-[conic-gradient(#ef4444_0%_5%,#f59e0b_5%_15%,#10b981_15%_100%)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#0f172a] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Security Events Card */}
          <div className="bg-white/[0.03] rounded-md p-4 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-3 text-sm text-white/70">
              <div className="font-semibold">Security Events</div>
              <div>•••</div>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-full h-[80px] flex items-end">
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[40%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[65%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[50%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[75%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[45%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-700 mx-0.5 rounded-t-sm h-[80%]"></div>
              </div>
            </div>
          </div>

          {/* Active SOC Cases Card */}
          <aside className="bg-white/[0.03] rounded-md p-3 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold text-white/70">
                Active SOC Cases
              </div>
              <div className="text-xs">•••</div>
            </div>
            <div className="flex-1 flex flex-col justify-center min-h-0 space-y-2">
              <div>
                <div className="flex justify-between text-[0.65rem] mb-1">
                  <span className="text-white/70">Critical</span>
                  <span className="text-red-500 font-medium">3</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full">
                  <div className="h-full w-[15%] bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[0.65rem] mb-1">
                  <span className="text-white/70">High</span>
                  <span className="text-amber-500 font-medium">12</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full">
                  <div className="h-full w-[40%] bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[0.65rem]">
                  <span className="text-white/70">Medium</span>
                  <span className="text-emerald-500 font-medium">24</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full">
                  <div className="h-full w-[65%] bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </aside>

          {/* Response Automation Card */}
          <div className="bg-white/[0.03] rounded-md p-4 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-3 text-sm text-white/70">
              <div className="font-semibold">Response Automation</div>
              <div>•••</div>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1 text-blue-600">73%</div>
                <div className="text-xs opacity-70 text-white">
                  of incidents auto-remediated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Alerts */}
      <div className="absolute top-[10%] right-0 translate-x-[0%] bg-red-500/95 text-white py-3 px-4 rounded-md text-sm shadow-lg z-20 animate-float whitespace-nowrap">
        <span className="mr-2 font-bold">🔴</span> Critical: Unusual admin
        activity
      </div>
      <div className="absolute bottom-[15%] left-0 -translate-x-[0%] bg-emerald-500/95 text-white py-3 px-4 rounded-md text-sm shadow-lg z-20 animate-float-delay-2s whitespace-nowrap">
        <span className="mr-2 font-bold">✅</span> Threat automatically
        contained
      </div>
      <div className="absolute top-[40%] right-0 translate-x-[-10%] bg-amber-500/95 text-white py-3 px-4 rounded-md text-sm shadow-lg z-20 animate-float-delay-3-5s whitespace-nowrap">
        <span className="mr-2 font-bold">⚠️</span> Multiple failed login
        attempts
      </div>
    </section>
  );
};

export default HeroBanner;
