import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";

import expenseCard from "../../assets/images/expeseCard.png";

/* =====================================================
   STATS INFO CARD
   ===================================================== */

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="relative z-20 flex w-fit items-center gap-4 rounded-xl bg-white p-4 shadow-lg">
      
      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}
      >
        {icon}
      </div>

      {/* Information */}
      <div>
        <p className="text-sm font-medium text-gray-500">
          {label}
        </p>

        <h3 className="text-xl font-bold text-gray-900">
          {value}
        </h3>
      </div>

    </div>
  );
};


/* =====================================================
   AUTH LAYOUT
   ===================================================== */

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">

      {/* =================================================
          LEFT SECTION
      ================================================= */}

      <div className="min-h-screen w-full px-8 py-8 md:w-[60vw] md:px-12 md:pb-12 md:pt-16">

        {/* Brand */}
        <h2 className="text-lg font-semibold text-black">
          Expense Tracker
        </h2>

        {/* Page Content */}
        <div className="mt-8">
          {children}
        </div>

      </div>


      {/* =================================================
          RIGHT SECTION
      ================================================= */}

      <div
        className="
          relative
          hidden
          min-h-screen
          w-[40vw]
          overflow-hidden
          bg-violet-50
          p-8
          md:block
        "
      >

        {/* =================================================
            DECORATIVE CIRCLES
        ================================================= */}

        <div
          className="
            absolute
            -left-10
            -top-10
            h-32
            w-32
            rounded-full
            bg-green-500
          "
        />

        <div
          className="
            absolute
            -right-10
            top-24
            h-24
            w-24
            rounded-full
            bg-violet-200
          "
        />


        {/* =================================================
            STATS CARD
        ================================================= */}

        <div className="absolute right-10 top-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown className="text-xl text-white" />}
            label="Track your expenses"
            value="430,000"
            color="bg-green-500"
          />
        </div>


        {/* =================================================
            EXPENSE CARD IMAGE
        ================================================= */}

        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <img
            src={expenseCard}
            alt="Expense Tracker Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;
