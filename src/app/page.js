"use client";

import Image from "next/image";
import Link from "next/link";
import saylaniLogo from "../../public/images/saylaniLogo.png";
import heroImage from "../../public/images/heroSection_qarz.jpg"
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div>
      <div className="nave_bar">

        <div className="nav_child">
        <Image
      src={saylaniLogo}
      width={300}
      height={300}
      alt="Picture of the author"
      className="logo"
    />
    <h1>Saylani Qarze <span className="qarze_hasana">Hasana Program</span></h1>

          
        </div>
      </div>

      <div>
        <Image
      src={heroImage}
      width={300}
      height={300}
      alt="Picture of the author"
      className="heroImage"
    />
        </div>
        <div className="mainContainer">

          <div className="weddings_category">
          <h1 className="category_headings">Wedding Loan</h1>
            <select className="weding_category">
              <option>
                Select Category
              </option>
              <option>
                Valima
              </option>
              <option>
                Furniture
              </option>
              <option>
                Valima Food
              </option>
              <option>
                Jahez
              </option>
            </select>
            <h1>Maximum Loan: PKR 5 Lakh</h1>
            <h1>Loan Period: 3 years</h1>
          </div>

          <div className="weddings_category">
          <h1 className="category_headings">Home Construction Loan</h1>
            <select className="weding_category">
              <option>
                Select Category
              </option>
              <option>
                Structure
              </option>
              <option>
                Finishing
              </option>
              <option>
                Loan
              </option>
            </select>
            <h1>Maximum Loan: PKR 10 Lakh</h1>
            <h1>Loan Period: 5 years</h1>
          </div>

          <div className="weddings_category">
          <h1 className="category_headings">Business Startup Loan</h1>
            <select className="weding_category">
              <option >
                Select Category
              </option>
              <option>
                Buy Stall
              </option>
              <option>
                Advance Rend For Shop
              </option>
              <option>
                Shop Assets
              </option>
              <option>
                Shop Machinery
              </option>
            </select>
            <h1>Maximum Loan: PKR 10 Lakh</h1>
            <h1>Loan Period: 5 years</h1>
          </div>

          <div className="weddings_category">
          
          </div>


        </div>
    </div>
  );
}
