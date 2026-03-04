import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

import { Target, DollarSign, TrendingUp, Users } from "lucide-react";

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

function Reports() {
  return (
    <div className="reports-page">

      {/* <h2 className="report-title">Reports & Analytics</h2>
      <p className="report-subtitle">
        Track your sales performance and metrics
      </p> */}
      <div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#111827",
          letterSpacing: "-0.5px",
        }}
      >
        Reports & Analytics
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginTop: 4,
          fontWeight: 400,
        }}
      >
        Track your sales performance and metrics
      </div>
    </div>

      {/* 4 CARDS */}
      <div className="report-cards">

        <div className="report-card">
          <div className="card-top">
            <Target className="icon green"/>
            <span className="growth green">+5%</span>
          </div>
          <h3>68%</h3>
          <p>Win Rate</p>
        </div>

        <div className="report-card">
  <div className="card-top">
    <DollarSign className="icon purple"/>
    <span className="growth green">+12%</span>
  </div>
  <h3>₹32.5K</h3>
  <p>Avg Deal Size</p>
</div>

        <div className="report-card">
          <div className="card-top">
            <TrendingUp className="icon blue"/>
            <span className="growth green">-3 days</span>
          </div>
          <h3>28 days</h3>
          <p>Sales Cycle</p>
        </div>

        <div className="report-card">
          <div className="card-top">
            <Users className="icon orange"/>
            <span className="growth green">+18%</span>
          </div>
          <h3>247</h3>
          <p>Active Leads</p>
        </div>

      </div>


      {/* CHARTS */}

      <div className="report-charts">

        <div className="chart-box">
          <h3>Revenue Trend</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>

  {/* Gradient Definition */}
  <defs>
    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="name"/>
  <YAxis/>
  <Tooltip/>

  <Line
    type="monotone"
    dataKey="revenue"
    stroke="url(#revenueGradient)"
    strokeWidth={3}
  />

</LineChart>
          </ResponsiveContainer>

        </div>


        <div className="chart-box">
          <h3>Deals Closed</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dealData}>

  {/* Gradient Definition */}
  <defs>
    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#8b5cf6"/>
      <stop offset="100%" stopColor="#6d28d9"/>
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="name"/>
  <YAxis/>
  <Tooltip/>

  <Bar
    dataKey="deals"
    fill="url(#barGradient)"
  />

</BarChart>
          </ResponsiveContainer>

        </div>

      </div>


      {/* TOP PERFORMERS */}

     <div className="top-performers">

  <h3>Top Performers This Month</h3>

  <div className="performer-row">
    <div className="performer-left">

      <span className="rank">#1</span>

      <div className="avatar">SJ</div>

      <div>
        <p className="name">Sarah Johnson</p>
        <p className="deals">8 deals closed</p>
      </div>

    </div>

    <span className="price">₹1,42,000</span>
  </div>


  <div className="performer-row">
    <div className="performer-left">

      <span className="rank">#2</span>

      <div className="avatar">MC</div>

      <div>
        <p className="name">Michael Chen</p>
        <p className="deals">6 deals closed</p>
      </div>

    </div>

     <span className="price">₹98,500</span>
  </div>


  <div className="performer-row">
    <div className="performer-left">

      <span className="rank">#3</span>

      <div className="avatar">DP</div>

      <div>
        <p className="name">David Park</p>
        <p className="deals">5 deals closed</p>
      </div>

    </div>

     <span className="price">₹87,200</span>
  </div>

</div>
    </div>
  );
}

export default Reports;