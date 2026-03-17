import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Target, 
  MapPin, 
  Waves, 
  Train, 
  ShoppingBag, 
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import { 
  UnitMixChart, 
  SeaViewIndicator,
  HistoricalPriceChart, 
  RegionalComparisonChart, 
  ScoreRadarChart 
} from './components/Charts';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const Card = ({ title, subtitle, icon: Icon, items, color = "navy" }: any) => (
  <div className="card-luxury flex flex-col h-full">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${color === 'gold' ? 'bg-luxury-gold/10 text-luxury-gold' : 'bg-luxury-navy/10 text-luxury-navy'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-6 italic">{subtitle}</p>
    <ul className="space-y-3 mt-auto">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="海瑅灣 La Mirabelle" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-widest uppercase">海 堤 灣 I</h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] mb-12">LA MIRABELLE I</p>
            <div className="inline-block px-8 py-3 border border-white/30 backdrop-blur-md rounded-full text-sm tracking-[0.2em] uppercase">
              投資與置業分析報告
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
        </motion.div>
      </header>

      {/* Core Values */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold mb-4 block">Core Values</span>
          <h2 className="section-title">掌握海堤灣核心價值</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="地標屬性" 
            subtitle="(The Asset)" 
            icon={Building2}
            items={[
              "5大星級發展商聯手 (信和、嘉里等)",
              "康城站壓軸臨海期數",
              "直達港島東無遮擋海景"
            ]}
          />
          <Card 
            title="價格定位" 
            subtitle="(The Value)" 
            icon={TrendingUp}
            color="gold"
            items={[
              "預測呎價 $17,000",
              "較康城二手溢價約 10%",
              "相比啟德或黃竹坑具備 15%-90% 折讓空間"
            ]}
          />
          <Card 
            title="最終建議" 
            subtitle="(The Action)" 
            icon={Target}
            items={[
              "極度適合「臨海自住客」與「鐵路通勤族」",
              "建議密切關注首批價單",
              "若呎價低於 $16,000 即為黃金進場點"
            ]}
          />
        </div>
      </Section>

      {/* Scale & Timeline */}
      <div className="bg-luxury-navy text-white py-24">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title text-white mb-6">壓軸臨海地標的<br/>資產規模與時程</h2>
              <p className="text-white/60 mb-12 max-w-md">
                龐大供應體量，涵蓋1至4房。經 The LOHAS 商場全天候直達港鐵康城站。
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-serif text-luxury-gold">2,550</div>
                  <div className="text-sm uppercase tracking-wider text-white/40">Total Units<br/>伙數規模</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-serif text-luxury-gold">5</div>
                  <div className="text-sm uppercase tracking-wider text-white/40">Top Developers<br/>巨頭聯手</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-serif text-luxury-gold">2027</div>
                  <div className="text-sm uppercase tracking-wider text-white/40">Completion<br/>預計入伙</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-full border border-luxury-gold/30 flex items-center justify-center relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-luxury-gold rounded-full"
                  />
                  <div className="text-center">
                    <Waves className="mx-auto mb-4 text-luxury-gold" size={48} />
                    <div className="text-2xl font-serif">Seamless Connection</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-2">無縫連接</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Unit Distribution - Notebook LM Style */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="section-title">鎖定換屋族群的戶型與景觀分佈</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#F9F7F4] rounded-3xl p-6 md:p-8 min-h-[400px] flex items-center justify-center">
            <UnitMixChart />
          </div>
          <div className="bg-[#F9F7F4] rounded-3xl p-6 md:p-8 min-h-[400px] flex items-center justify-center">
            <SeaViewIndicator />
          </div>
        </div>
      </Section>

      {/* Price Thresholds */}
      <div className="bg-luxury-beige/50 py-24">
        <Section>
          <div className="text-center mb-16">
            <h2 className="section-title">預期進場門檻與各戶型定價區間</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              康城近期二手成交呎價約 $14,000-$15,500。預計海瑅灣將憑藉「壓軸期數」與「無遮擋海景」優勢，整體開價將貼近市價或略帶 5-10% 溢價。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: "1房 (~350呎)", price: "$490萬 - $525萬", psf: "$14.0k - $15.0k" },
              { type: "2房 (~500呎)", price: "$725萬 - $775萬", psf: "$14.5k - $15.5k", highlight: true },
              { type: "3房 (~750呎)", price: "$1,125萬 - $1,200萬", psf: "$15.0k - $16.0k" },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${item.highlight ? 'bg-luxury-navy text-white border-luxury-navy shadow-2xl scale-105' : 'bg-white border-gray-200'}`}>
                <div className={`text-xs uppercase tracking-widest mb-4 ${item.highlight ? 'text-luxury-gold' : 'text-gray-400'}`}>Entry Threshold</div>
                <h3 className="text-xl font-serif mb-6">{item.type}</h3>
                <div className="text-3xl font-serif mb-2">{item.price}</div>
                <div className={`text-sm ${item.highlight ? 'text-white/60' : 'text-gray-500'}`}>預計呎價 {item.psf}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Historical & Regional Charts - Notebook LM Style */}
      <Section className="max-w-7xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-[#F9F7F4] rounded-3xl p-8 md:p-12 w-full">
            <HistoricalPriceChart />
          </div>
          <div className="bg-[#F9F7F4] rounded-3xl p-8 md:p-12 w-full">
            <RegionalComparisonChart />
          </div>
        </div>
      </Section>

      {/* Radar Score */}
      <div className="bg-white py-24 border-y border-gray-100">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">居住品質與增值潛力<br/>綜合評鑑</h2>
              <div className="space-y-6 mt-12">
                {[
                  { icon: MapPin, label: "環境 (9/10)", desc: "臨海綠化，逾130萬呎綠化空間，景觀極佳。" },
                  { icon: Train, label: "交通 (8/10)", desc: "經商場直達康城站，但班次較疏。" },
                  { icon: ShoppingBag, label: "商業配套 (8/10)", desc: "The LOHAS 康城商場機能完善。" },
                  { icon: GraduationCap, label: "校網 (7/10)", desc: "將軍澳區校網，具備多間國際學校。" },
                  { icon: TrendingUp, label: "升值潛力 (7/10)", desc: "區內二手供應龐大，短期升幅受限。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="text-luxury-gold shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-5xl font-serif text-luxury-navy">8/10</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mt-2">Overall Score</div>
                </div>
              </div>
              <ScoreRadarChart />
            </div>
          </div>
        </Section>
      </div>

      {/* Pros & Cons */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-emerald-50 border border-emerald-100">
            <div className="flex items-center gap-3 mb-8 text-emerald-700">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-serif font-bold">看漲護城河 (Pros)</h3>
            </div>
            <ul className="space-y-6">
              {[
                { t: "絕版地段", d: "日出康城壓軸臨海，無遮擋景觀具稀缺性。" },
                { t: "星級陣容", d: "5大發展商聯手，建築質素與交付能力極高。" },
                { t: "成熟配套", d: "The LOHAS 大型商場與完善綠化，即買即享受。" }
              ].map((item, i) => (
                <li key={i}>
                  <div className="font-bold text-sm mb-1">{item.t}</div>
                  <div className="text-xs text-emerald-900/60">{item.d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl bg-rose-50 border border-rose-100">
            <div className="flex items-center gap-3 mb-8 text-rose-700">
              <XCircle size={24} />
              <h3 className="text-xl font-serif font-bold">價格阻力位 (Cons)</h3>
            </div>
            <ul className="space-y-6">
              {[
                { t: "通勤瓶頸", d: "康城站班次先天受限，繁忙時間高密度人口導致擠迫。" },
                { t: "資金鎖定", d: "約 17 個月的樓花期，需承擔期間宏觀市況與息口變數。" },
                { t: "微觀滋擾", d: "周邊仍有零星工地，入伙初期需面對噪音與塵埃。" }
              ].map((item, i) => (
                <li key={i}>
                  <div className="font-bold text-sm mb-1">{item.t}</div>
                  <div className="text-xs text-rose-900/60">{item.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Risk Assessment */}
      <Section className="pb-32">
        <div className="text-center mb-16">
          <h2 className="section-title">置業風險熱力圖與緩釋因素評估</h2>
        </div>
        <div className="space-y-6">
          {[
            { level: "高風險", color: "bg-rose-500", title: "宏觀市況與通勤壓力", items: ["17個月樓花期內的利率與大市波動", "港鐵繁忙時間的極度擠擁 (結構性問題難以短期根治)"] },
            { level: "中風險", color: "bg-amber-500", title: "市場競爭與微觀環境", items: ["區內海量二手盤供應，未來轉手定價競爭大", "短期工地噪音與塵埃影響首年入伙體驗"] },
            { level: "低風險", color: "bg-emerald-500", title: "建築風險與長遠資產", items: ["5大巨頭聯手，爛尾風險極低 (近乎零)", "將軍澳南/康城臨海地皮絕版，長遠資產保值力極強"] },
          ].map((risk, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 shrink-0 md:w-48">
                <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                <span className="font-bold text-sm uppercase tracking-wider">{risk.level}</span>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-3">{risk.title}</h4>
                <ul className="space-y-2">
                  {risk.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 flex gap-2">
                      <span className="text-luxury-gold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="section-title">尊尚生活空間預覽</h2>
          <p className="text-gray-500">由世界著名設計團隊 CCD 鄭中設計事務所及 BLINK DESIGN GROUP 匠心打造</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { src: "/images/grandentrance.png", title: "尊貴入口 (Grand Entrance)" },
            { src: "/images/mirabellevilla.png", title: "海瑅盛聚廳 (Mirabelle Villa)" },
            { src: "/images/oceangym.png", title: "臨海健身室 (Ocean Gym)" },
            { src: "/images/infinitypool.png", title: "無邊際泳池 (Infinity Pool)" },
          ].map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="bg-luxury-navy text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-8">開價黃金定律 (Action Trigger)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-luxury-gold text-sm mb-4">若首批定價約</div>
              <div className="text-3xl font-serif mb-4">$17,000/呎</div>
              <p className="text-xs text-white/40">符合預期 (貼市價)，自住買家可按自身需求入市。</p>
            </div>
            <div className="p-8 bg-luxury-gold text-luxury-navy rounded-2xl shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest mb-4">強烈信號</div>
              <div className="text-luxury-navy/60 text-sm mb-2">若首批定價</div>
              <div className="text-3xl font-serif mb-4">&lt; $16,000/呎</div>
              <p className="text-xs font-medium">強烈建議進場！海瑅灣將成為當前市況下極具防守力與性價比的優質資產。</p>
            </div>
          </div>

          {/* WhatsApp 聯絡按鈕 */}
          <a
            href="https://wa.me/85265026960"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-colors duration-300 mb-8"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="font-medium">WhatsApp 查詢</span>
          </a>

          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            免責聲明：本報告僅供參考，不構成投資建議。所有資訊以發展商最新公佈為準。
          </p>
        </div>
      </footer>
    </div>
  );
}
