import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";
import { Target, DollarSign, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Typography } from "antd";
const revenueData = [
  { name: "Jan", revenue: 45000 },
  { name: "Feb", revenue: 52000 },
  { name: "Mar", revenue: 48000 },
  { name: "Apr", revenue: 61000 },
  { name: "May", revenue: 55000 },
  { name: "Jun", revenue: 68000 }
];

const dealData = [
  { name: "Jan", deals: 12 },
  { name: "Feb", deals: 15 },
  { name: "Mar", deals: 13 },
  { name: "Apr", deals: 18 },
  { name: "May", deals: 16 },
  { name: "Jun", deals: 21 }
];

export default function Reports() {
  
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };
const { Title, Text } = Typography;

  const layoutAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  const fontInter = { fontFamily: '"Inter", sans-serif' };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen" style={fontInter}>

      {/* ================= HEADER ================= */}
      
<div>
  <Title level={2} style={{ margin: 0 }}>
   Reports & Analytics
  </Title>

  <Text type="secondary">
               Track your sales performance and metrics

  </Text>
</div>
      {/* ================= KPI CARDS (Animated) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {[
          { title: "Win Rate", value: "68%", growth: "+5%", growthColor: "text-[#10b981]", icon: <Target size={22} className="text-[#10b981]"/>, bg: "bg-[#d1fae5]" },
          { title: "Avg Deal Size", value: "₹32.5K", growth: "+12%", growthColor: "text-[#10b981]", icon: <DollarSign size={22} className="text-[#7c3aed]"/>, bg: "bg-[#f3e8ff]" },
          { title: "Sales Cycle", value: "28 days", growth: "-3 days", growthColor: "text-[#10b981]", icon: <TrendingUp size={22} className="text-[#3b82f6]"/>, bg: "bg-[#dbeafe]" },
          { title: "Active Leads", value: "247", growth: "+18%", growthColor: "text-[#10b981]", icon: <Users size={22} className="text-[#f59e0b]"/>, bg: "bg-[#fef3c7]" }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, boxShadow: "0 12px 35px rgba(2,6,23,0.12)" }}
            variants={cardAnimation}
            className="bg-white p-5 rounded-[14px] shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex flex-col justify-between cursor-pointer border border-[#transparent] hover:border-[#e2e8f0] transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${item.bg} w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <span className={`text-[13px] font-bold ${item.growthColor} bg-gray-50 px-2.5 py-1 rounded-[6px]`}>
                {item.growth}
              </span>
            </div>
            
            <div>
              {/* Values styled in Black as requested */}
              <h3 className="text-[28px] font-[800] text-[#111827] leading-none mb-1">
                {item.value}
              </h3>
              <p className="text-[#6b7280] text-[13px] font-semibold uppercase tracking-[0.5px]">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= CHARTS ================= */}
      <motion.div 
        variants={layoutAnimation} 
        initial="hidden" 
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6"
      >
        
        {/* REVENUE CHART */}
        <div className="bg-white p-5 lg:p-6 rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[transparent] hover:border-[#e2e8f0] transition-all">
          <h3 className="text-[16px] font-bold text-[#111827] mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1677ff" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1677ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0"/>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dx={-10} tickFormatter={(val) => `₹${val/1000}k`} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                cursor={{ stroke: '#e5e7eb', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#1677ff" strokeWidth={3} dot={{r: 4, fill: '#1677ff', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* DEALS CHART */}
        <div className="bg-white p-5 lg:p-6 rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[transparent] hover:border-[#e2e8f0] transition-all">
          <h3 className="text-[16px] font-bold text-[#111827] mb-6">Deals Closed</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dealData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6"/>
                  <stop offset="100%" stopColor="#6d28d9"/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0"/>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dx={-10} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="deals" fill="url(#barGradient)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </motion.div>

      {/* ================= TOP PERFORMERS ================= */}
      <motion.div 
        variants={layoutAnimation} 
        initial="hidden" 
        animate="visible"
        className="bg-white rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[transparent] overflow-hidden"
      >
        <div className="p-5 lg:px-6 border-b border-[#f0f0f0]">
          <h3 className="text-[16px] font-bold text-[#111827]">Top Performers This Month</h3>
        </div>

        <div className="px-2 pb-2">
          {[
            { rank: "#1", name: "Sarah Johnson", deals: "8 deals closed", price: "₹1,42,000", avatar: "SJ", bg: "bg-[#1677ff]", color: "text-[#1677ff]", rankBg: "bg-[#e6f4ff]" },
            { rank: "#2", name: "Michael Chen", deals: "6 deals closed", price: "₹98,500", avatar: "MC", bg: "bg-[#7c3aed]", color: "text-[#7c3aed]", rankBg: "bg-[#f3e8ff]" },
            { rank: "#3", name: "David Park", deals: "5 deals closed", price: "₹87,200", avatar: "DP", bg: "bg-[#10b981]", color: "text-[#10b981]", rankBg: "bg-[#d1fae5]" },
          ].map((performer, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors rounded-[12px] ${idx !== 2 ? "border-b border-gray-100" : ""}`}
            >
              <div className="flex items-center gap-4">
                
                <span className={`w-8 h-8 flex items-center justify-center rounded-[8px] text-[12px] font-bold ${performer.rankBg} ${performer.color}`}>
                  {performer.rank}
                </span>

                <div className={`w-10 h-10 ${performer.bg} text-white rounded-full flex items-center justify-center font-bold text-[14px] shadow-sm`}>
                  {performer.avatar}
                </div>

                <div>
                  <p className="text-[15px] font-bold text-[#111827]">{performer.name}</p>
                  <p className="text-[13px] text-[#6b7280] font-medium">{performer.deals}</p>
                </div>

              </div>

              <span className="text-[16px] font-[800] text-[#111827]">
                {performer.price}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
