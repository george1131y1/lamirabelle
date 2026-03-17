import React from 'react';

// Notebook LM 風格配色
const COLORS = {
  navy: '#0A2540',
  navyLight: '#1A3A5C',
  gold: '#D4A853',
  goldLight: '#E8C87A',
  gray: '#6B7280',
  grayLight: '#9CA3AF',
  white: '#FFFFFF',
  cream: '#F9F7F4',
};

// SVG 單位戶型分佈圖 (Figma 設計 - 甜甜圈圖)
export const UnitMixChart = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <svg viewBox="0 0 800 600" className="w-full h-auto max-h-[500px]" preserveAspectRatio="xMidYMid meet">
        {/* 背景 */}
        <rect width="800" height="600" rx="24" fill={COLORS.cream}/>

        {/* 連接線 - 調整位置 */}
        <line x1="537.86" y1="288.99" x2="627.36" y2="288.99" stroke="#9CA3AF" strokeWidth="2"/>
        <line x1="258.58" y1="340.57" x2="205.31" y2="378.62" stroke="#9CA3AF" strokeWidth="2"/>
        <line x1="467.66" y1="126.84" x2="507.07" y2="79.54" stroke="#9CA3AF" strokeWidth="2"/>
        <line x1="342.77" y1="74.65" x2="342.77" y2="44.22" stroke="#9CA3AF" strokeWidth="2"/>

        {/* 2房標籤 */}
        <text x="626.23" y="277" fill="#374151" fontSize="28.8">
          <tspan fontFamily="Roboto-Medium, Roboto" fontWeight="500">2</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">房</tspan>
        </text>
        <text x="626.23" y="313" fill="#6B7280" fontSize="24">
          <tspan fontFamily="SegoeUI, 'Segoe UI'">47%, 1200</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">伙</tspan>
        </text>

        {/* 3房標籤 */}
        <text x="126.79" y="406.52" fill="#374151" fontSize="28.8">
          <tspan fontFamily="Roboto-Medium, Roboto" fontWeight="500">3</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">房</tspan>
        </text>
        <text x="126.79" y="437.72" fill="#6B7280" fontSize="24">
          <tspan fontFamily="SegoeUI, 'Segoe UI'">27%, 700</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">伙</tspan>
        </text>

        {/* 1房標籤 - 也向下移動保持比例 */}
        <text x="507.58" y="75" fill="#374151" fontSize="28.8">
          <tspan fontFamily="Roboto-Medium, Roboto" fontWeight="500">1</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">房</tspan>
        </text>
        <text x="487.37" y="45" fill="#6B7280" fontSize="24">
          <tspan fontFamily="SegoeUI, 'Segoe UI'">16%, 400</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">伙</tspan>
        </text>

        {/* 4房標籤 - 向下移動避免被切掉 */}
        <text x="324.55" y="35" fill="#374151" fontSize="28.8">
          <tspan fontFamily="Roboto-Medium, Roboto" fontWeight="500">4</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">房</tspan>
        </text>
        <text x="283.32" y="5" fill="#6B7280" fontSize="24">
          <tspan fontFamily="SegoeUI, 'Segoe UI'">10%, 250</tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">伙</tspan>
        </text>

        {/* 甜甜圈圖 - 2房 (Gold) */}
        <path fill={COLORS.gold} stroke={COLORS.white} strokeWidth="4" 
          d="M392.49,262.79l-92.06-173.13c29.36-15.61,58.81-22.95,92.06-22.95v196.09Z"/>

        {/* 甜甜圈圖 - 3房 (Navy) */}
        <path fill={COLORS.navy} stroke={COLORS.white} strokeWidth="4"
          d="M392.49,262.79l10.26,195.82c-108.15,5.67-200.41-77.41-206.08-185.56-4.1-78.19,34.63-146.64,103.76-183.4l92.06,173.13Z"/>

        {/* 甜甜圈圖 - 1房 (Gold) */}
        <path fill={COLORS.gold} stroke={COLORS.white} strokeWidth="4"
          d="M392.49,262.79l136.21-141.05c77.9,75.23,80.07,199.37,4.84,277.27-35.81,37.08-79.31,56.91-130.79,59.6l-10.26-195.82Z"/>

        {/* 甜甜圈圖 - 4房 (Navy) */}
        <path fill={COLORS.navy} stroke={COLORS.white} strokeWidth="4"
          d="M392.49,262.79v-196.09c53.28,0,97.89,18.02,136.21,55.03l-136.21,141.05Z"/>

        {/* 中心圓 */}
        <circle cx="394.46" cy="262.96" r="125.58" fill={COLORS.cream}/>

        {/* 總伙數 */}
        <text x="318.41" y="268.96" fill="#1F2937" fontSize="57.6" fontWeight="700" fontFamily="SegoeUI-Bold, 'Segoe UI', system-ui, sans-serif">2,550</text>
        <text x="357.35" y="305.69" fill="#6B7280" fontSize="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300">總伙數</text>
      </svg>
    </div>
  );
};

// SVG 海景指示器 (Figma 設計) - 移除圓角框，只顯示文字
export const SeaViewIndicator = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <svg viewBox="0 0 800 400" className="w-full h-auto max-h-[350px]" preserveAspectRatio="xMidYMid meet">
        {/* 背景 */}
        <rect width="800" height="400" rx="24" fill={COLORS.cream}/>

        {/* 移除圓角框，只顯示文字說明 */}
        <text x="400" y="100" textAnchor="middle" fill="#374151" fontSize="24" fontFamily="system-ui, -apple-system, sans-serif">
          逾60%單位享有將軍澳海灣及港島東開揚景致
        </text>

        {/* >60% 大數字 */}
        <text x="400" y="220" textAnchor="middle" fill="#1F2937" fontSize="100" fontWeight="700" fontFamily="SegoeUI-Bold, 'Segoe UI', system-ui, sans-serif">{'>'} 60%</text>

        {/* 進度條背景 */}
        <rect x="150" y="280" width="500" height="30" rx="15" fill="#E5E7EB"/>

        {/* 進度條填充 (60%) */}
        <rect x="150" y="280" width="300" height="30" rx="15" fill="url(#blueGrad)"/>

        {/* 60% 標記線 */}
        <rect x="445" y="265" width="4" height="60" fill={COLORS.navy}/>

        {/* 漸層定義 */}
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A3A5C"/>
            <stop offset="100%" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// SVG 歷史價格走勢圖 - 放大版本，全寬顯示
export const HistoricalPriceChart = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <svg viewBox="0 0 1000 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* 背景 */}
        <rect width="1000" height="500" rx="24" fill={COLORS.cream}/>

        {/* 標題 */}
        <text x="500" y="50" textAnchor="middle" fill="#1F2937" fontSize="28" fontWeight="700" fontFamily="system-ui, sans-serif">
          日出康城歷史價格演進與海瑅灣的溢價支撐
        </text>

        {/* 說明文字 */}
        <text x="500" y="85" textAnchor="middle" fill="#374151" fontSize="16" fontFamily="system-ui, sans-serif">
          從首期至今經歷巨大蛻變。第13期作為康城站臨海最後一塊拼圖，其 $17,000 的預估奠定了該區的價值天花板。
        </text>

        {/* Y軸標籤 */}
        <text x="60" y="150" fill="#6B7280" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">$18k</text>
        <text x="60" y="220" fill="#6B7280" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">$16k</text>
        <text x="60" y="290" fill="#6B7280" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">$14k</text>
        <text x="60" y="360" fill="#6B7280" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">$12k</text>

        {/* 網格線 */}
        <line x1="100" y1="145" x2="980" y2="145" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="100" y1="215" x2="980" y2="215" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="100" y1="285" x2="980" y2="285" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="100" y1="355" x2="980" y2="355" stroke="#E5E7EB" strokeWidth="1"/>
        <line x1="100" y1="425" x2="980" y2="425" stroke="#E5E7EB" strokeWidth="1"/>

        {/* 1期 首都 - $12k */}
        <text x="180" y="410" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">$12k</text>
        <rect x="155" y="425" width="50" height="10" fill="#9CA3AF"/>
        <text x="180" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">1期</text>
        <text x="180" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">首都</text>

        {/* 3期 緻藍天 - $13k */}
        <text x="290" y="380" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">$13k</text>
        <rect x="265" y="395" width="50" height="40" fill="#9CA3AF"/>
        <text x="290" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">3期</text>
        <text x="290" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">緻藍天</text>

        {/* 4期 晉海 - $14k */}
        <text x="400" y="340" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">$14k</text>
        <rect x="375" y="355" width="50" height="80" fill="#9CA3AF"/>
        <text x="400" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">4期</text>
        <text x="400" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">晉海</text>

        {/* 6期 LP6 - $15k */}
        <text x="510" y="300" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">$15k</text>
        <rect x="485" y="315" width="50" height="120" fill="#9CA3AF"/>
        <text x="510" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">6期</text>
        <text x="510" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">LP6</text>

        {/* 9期 MARINI - $16.5k */}
        <text x="620" y="255" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="600">$16.5k</text>
        <rect x="595" y="270" width="50" height="165" fill="#9CA3AF"/>
        <text x="620" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">9期</text>
        <text x="620" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">MARINI</text>

        {/* 13期 海瑅灣 - $17k (目標 - Navy) */}
        <text x="750" y="235" textAnchor="middle" fill={COLORS.navy} fontSize="20" fontWeight="700">$17k</text>
        <rect x="720" y="250" width="70" height="185" fill={COLORS.navy} rx="4"/>
        <text x="755" y="460" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="500">13期</text>
        <text x="755" y="480" textAnchor="middle" fill="#6B7280" fontSize="14">海瑅灣</text>

        {/* 註解 */}
        <text x="500" y="510" textAnchor="middle" fill="#6B7280" fontSize="14">
          (註：數據為近期二手成交參考)
        </text>
      </svg>
    </div>
  );
};

// SVG 區域價值比較矩陣 - 修正文字對齊和缺失
export const RegionalComparisonChart = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <svg viewBox="0 0 1000 550" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* 背景 */}
        <rect width="1000" height="550" rx="24" fill={COLORS.cream}/>

        {/* 標題 */}
        <text x="500" y="50" textAnchor="middle" fill="#1F2937" fontSize="28" fontWeight="700" fontFamily="system-ui, sans-serif">
          全港鐵路臨海新盤區域價值比較矩陣
        </text>

        {/* Baseline 標記 */}
        <text x="450" y="90" fill="#6B7280" fontSize="14" fontFamily="system-ui, sans-serif">Baseline</text>

        {/* Baseline 虛線 */}
        <line x1="480" y1="100" x2="480" y2="420" stroke={COLORS.navy} strokeWidth="2" strokeDasharray="8,4"/>

        {/* === 基準：將軍澳·海瑅灣 === */}
        <text x="100" y="145" fill="#374151" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">將軍澳·海瑅灣</text>
        <text x="100" y="168" fill="#6B7280" fontSize="14">(臨海+鐵路)</text>

        <rect x="280" y="125" width="200" height="45" rx="6" fill="url(#navyGrad2)"/>

        <text x="760" y="155" fill={COLORS.navy} fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif">$17.0k/呎</text>

        {/* === 黃竹坑 === */}
        <text x="100" y="225" fill="#374151" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">黃竹坑鐵路盤</text>
        <text x="100" y="248" fill="#6B7280" fontSize="14">(晉環/揚海/Blue Coast)</text>

        <rect x="280" y="205" width="270" height="45" rx="6" fill="#D1D5DB"/>

        <text x="760" y="225" fill="#374151" fontSize="20" fontWeight="600">$19.5k - $21.0k</text>
        <text x="760" y="248" fill="#6B7280" fontSize="16">溢價 15-25%</text>

        {/* === 何文田 === */}
        <text x="100" y="305" fill="#374151" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">何文田鐵路盤</text>
        <text x="100" y="328" fill="#6B7280" fontSize="14">(朗賢峯/瑜一)</text>

        <rect x="280" y="285" width="330" height="45" rx="6" fill="#D1D5DB"/>

        <text x="760" y="305" fill="#374151" fontSize="20" fontWeight="600">$23.0k - $25.0k</text>
        <text x="760" y="328" fill="#6B7280" fontSize="16">溢價 35-45%</text>

        {/* === 啟德 === */}
        <text x="100" y="385" fill="#374151" fontSize="18" fontWeight="600" fontFamily="system-ui, sans-serif">啟德臨海盤</text>
        <text x="100" y="408" fill="#6B7280" fontSize="14">(維港1號/澐璟/天璽·海)</text>

        <rect x="280" y="365" width="420" height="45" rx="6" fill="#D1D5DB"/>

        <text x="760" y="385" fill="#374151" fontSize="20" fontWeight="600">$22.0k - $32.0k</text>
        <text x="760" y="408" fill="#DC2626" fontSize="16">溢價 30-90%</text>

        {/* 底部說明文字 - 移除圓角框 */}
        <text x="500" y="480" textAnchor="middle" fill="#374151" fontSize="18" fontWeight="500" fontFamily="system-ui, sans-serif">
          用啟德新區的一半價格，買入同等級的無遮擋海景
        </text>
        <text x="500" y="505" textAnchor="middle" fill="#374151" fontSize="18" fontWeight="500" fontFamily="system-ui, sans-serif">
          與鐵路配套，展現極強的跨區性價比。
        </text>

        {/* 漸層定義 */}
        <defs>
          <linearGradient id="navyGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.navy}/>
            <stop offset="100%" stopColor="#1E40AF"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// SVG 雷達圖
export const ScoreRadarChart = () => {
  const data = [
    { subject: '環境', score: 9, fullMark: 10 },
    { subject: '交通', score: 8, fullMark: 10 },
    { subject: '商業配套', score: 8, fullMark: 10 },
    { subject: '校網', score: 7, fullMark: 10 },
    { subject: '升值潛力', score: 7, fullMark: 10 },
  ];

  const centerX = 150;
  const centerY = 130;
  const radius = 90;
  const angleStep = (2 * Math.PI) / data.length;

  const polygonPoints = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (d.score / d.fullMark) * radius;
    return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 300 280" className="w-full max-w-sm">
        {[2, 4, 6, 8, 10].map((level) => (
          <polygon
            key={level}
            points={data.map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const r = (level / 10) * radius;
              return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
            }).join(' ')}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        ))}

        {data.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + radius * Math.cos(angle)}
              y2={centerY + radius * Math.sin(angle)}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={polygonPoints}
          fill={COLORS.gold}
          fillOpacity="0.3"
          stroke={COLORS.gold}
          strokeWidth="2"
        />

        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const r = (d.score / d.fullMark) * radius;
          return (
            <circle
              key={i}
              cx={centerX + r * Math.cos(angle)}
              cy={centerY + r * Math.sin(angle)}
              r="4"
              fill={COLORS.gold}
            />
          );
        })}

        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelRadius = radius + 20;
          return (
            <text
              key={i}
              x={centerX + labelRadius * Math.cos(angle)}
              y={centerY + labelRadius * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-600 text-xs"
            >
              {d.subject}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
