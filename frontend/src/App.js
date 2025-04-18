import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreditScoreForm from "./components/CreditScoreForm";
import LoanForm from "./components/LoanForm";
import Logo from "./assets/logo.jpg"; // Your logo file
import MainImage from "./assets/image.webp"; // The CIBIL image you uploaded
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict-credit-score" element={<CreditScoreForm />} />
          <Route path="/loan-eligibility" element={<LoanForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="CibilAI Logo" className="logo" />
        </div>

        <div className="navbar-links-container">
          <div className="nav-links-scroll" id="navScroll">
            <ul className="nav-links">
              <li><a href="#what">What is Credit Score?</a></li>
              <li><a href="#benefits">Benefits of a Credit Score</a></li>
              <li><a href="#good">What is a Good Credit Score?</a></li>
              <li><a href="#ranges">Credit Score ranges</a></li>
              <li><a href="#factors">Factors that affect credit score</a></li>
              <li><a href="#impact">Impact of CIBIL on Loan Eligibility</a></li>
              <li><a href="#improve">How to Improve Credit Score?</a></li>
            </ul>
          </div>
          <button className="scroll-button" onClick={() => {
            document.getElementById('navScroll').scrollBy({ left: 150, behavior: 'smooth' });
          }}>&gt;</button>
        </div>
      </nav>

      {/* Main section */}
      <div className="main-content">
        <div className="left-content">
          <h1> Welcome to <b>CibilAI</b> </h1>
          <p>
            CibilAI helps you estimate your credit score and check your loan eligibility instantly.
          </p>
          <div className="button-group">
            <Link to="/predict-credit-score">
              <button className="primary-btn">Predict Credit Score</button>
            </Link>
            <Link to="/loan-eligibility">
              <button className="primary-btn">Check Loan Eligibility</button>
            </Link>
          </div>
        </div>
        <div className="right-content">
          <img src={MainImage} alt="CIBIL Dashboard" className="main-image" />
        </div>
      </div>

      {/* Questions */}
      <div className="questions">
        <h1 id="what" className="section"> What is credit score? </h1>
        <p> <b><i>A credit score is a <b style={{ color: "rgb(241, 74, 124)" }}>3-digit numeric summary</b> of your credit history</i></b> that represents your past credit behavior and how well you have managed your
          credit products, like personal loans, credit cards, home loans, business loans, auto loans, overdrafts, credit lines, etc. Credit score, which is
          also commonly referred to as <b><i>CIBIL score</i></b> is primarily a measure of your ability to borrow from banks and NBFCs and financial institutions.
          CIBIL score is calculated and generated based on the consumer's credit information provided by the lenders to credit bureaus on a monthly basis.</p>

        <p>Simply put, your credit score shows lenders whether you are a reliable borrower with minimum risk or a risky one, as well as the likelihood of you
          repaying a new loan in time. When you apply for any type of loan or a credit card, the lender requests a credit report check from the credit bureau
          to know your repayment capability and creditworthiness.</p>

        <p>CIBIL score <b><i>ranges from <b style={{ color: "rgb(241, 74, 124)" }}>300-900</b></i></b> in which the higher your credit score, the more likely lenders are to approve you for new credit. Usually, <b><i>a credit
          score of 750 and above is considered a standard benchmark</i></b> and preferred by lenders for loan or credit card approval. For a few banks/NBFCs, even a
          credit score of 700+ is also considered for credit card approvals.</p>

        <h1 id="benefits" className="section"> Benefits of credit score </h1>
        <p> Your credit score is <b><i>one of the first things that a lender bank or NBFC will check</i></b> while evaluating your loan or credit card
          application. In case your credit score is low, then try to improve it at the earliest or else the lender might reject the application without even
          considering it further. </p>

        <p> If your credit score is high, the lender will look into other details to determine, such as your creditworthiness and repayment capacity. Thus,
          a good credit score increases the chances of your loan application's approved and helps in availing funds at ease..</p>

        <p> A good CIBIL score would not only help you access credit, but it may also help reduce your interest outgo for a loan. Many banks/NBFCs offer
          preferential low-interest rates to applicants with a good credit score and repayment history.</p>

        <h1 id="good" className="section"> What is a good credit score? </h1>
        <p>Today, most lenders consider a <b><i>credit score of <b style={{ color: "rgb(241, 74, 124)" }}>700 and above</b> from CIBIL</i></b> as a good credit score. Getting the loan or credit card application
          approved becomes relatively easier if you have and maintain a CIBIL score of 700 or above and as close to 900. It is advisable to check your credit
          score once every month.</p>
      </div>

      {/* Table */}
      <h1 id="ranges" className="section">Credit score ranges and meaning</h1>
      <div class="table-container">
        <div class="table-scroll">
          <table class="responsive-table" role="table">
            <thead>
              <tr>
                <th>Score Band</th>
                <th>Category</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;300</td>
                <td>No Score/No History</td>
                <td>It means you have never taken a loan or credit card and have no credit history. For the best offers on loans and credit cards in the future, you should start building your credit score.</td>
              </tr>
              <tr>
                <td>300-550</td>
                <td>Very Low Credit Score</td>
                <td>Your credit history is damaged. However, with awareness and discipline, you can strengthen your credit score. Check your credit report thoroughly to determine why your credit score is low and take action.</td>
              </tr>
              <tr>
                <td>551-620</td>
                <td>Low Credit Score</td>
                <td>You might not have shown good credit behavior that has damaged your credit history. You need to take immediate measures to improve your score to become eligible for credit in the future.</td>
              </tr>
              <tr>
                <td>621-700</td>
                <td>Fair Credit Score</td>
                <td>You are not far from a strong credit score. To be eligible for the best offers, you should work on improving your score.</td>
              </tr>
              <tr>
                <td>701-749</td>
                <td>Good Credit Score</td>
                <td>You have been responsible with credit and have displayed good credit behavior. Most banks and NBFCs would be happy to offer you credit.</td>
              </tr>
              <tr>
                <td>750+</td>
                <td>Excellent Credit Score</td>
                <td>Your track record with credit is superb! With this score, you would meet the eligibility criteria of most banks and NBFCs and are likely to get the best offers.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="note"><strong>Please Note:</strong> The credit score range mentioned above is only indicative and may vary from lender to lender and bureau to bureau.</p>
      </div>

      {/* Factors */}
      <h1 id="factors" className="section"> Factors that affect Credit Score </h1>
      <div className="factors-container">
        <p>Some of the <b><i>key factors that influence your credit score are:</i></b></p>

        <p><b><i style={{ color: "#007bff" }}>Loan Repayment History:</i></b> Timely payments can boost your credit score and help in improving it significantly.
          Defaulting on your EMIs or making late payments negatively affects your CIBIL score. Your loan repayment history has a <b><i>high impact on your
            CIBIL score calculation.</i></b></p>

        <p><b><i style={{ color: "#007bff" }}>Duration of Credit History:</i></b> The duration or age of your credit history also affects your credit score.
          If you have used credit cards/loans for a long period and made timely payments on them, then it's a sign of disciplined credit behavior. It has a
          medium impact on your credit score.</p>

        <p><b><i style={{ color: "#007bff" }}>Number of Hard Inquiries:</i></b> Every time you apply for a new credit product, the lender inquires about your
          credit score. Such inquiries by lenders and financial institutions are known as hard inquiries. Too many hard inquiries may negatively affect your
          credit score as it shows you to be credit-hungry. Multiple hard inquiries at the same time may have a considerable short-term impact on your credit
          score. However, if you check or download your credit report, it is considered a soft Inquiry that has no impact on your credit score.</p>

        <p><b><i style={{ color: "#007bff" }}>Credit Utilization:</i></b> The ratio of the credit amount you spend to the credit amount available to you is
          known as the <b><i>credit utilization ratio</i></b>. It is recommended to keep your CUR to less than 30% of your available credit limit, though even a higher CUR
          barely has an impact on your credit score as long as you pay your credit card bill on time. However, maxing out the limit on your credit card
          frequently may indicate a high dependency on credit, which may negatively impact your credit score.</p>

        <p><b><i style={{ color: "#007bff" }}>Credit Mix:</i></b> If you have taken different kinds of loans like personal, auto or home loans and have
          responsibly paid them back, it shows your ability to handle different kinds of credit. Building a good credit mix over time has a positive impact on
          your credit profile. Also, if you have taken too many unsecured loans like personal loans, it shows you are credit-hungry and excessively dependent on
          credit. This may have an impact on your credit score, but if your repayment record is strong, it's unlikely to be anything significant. </p>

        <p><i><b>Note:</b> Having many active loans can increase your EMI to NMI ratio, reducing your chances of getting further credit. However, lenders
          rarely reject an application just for an imbalanced credit mix.</i></p>
      </div>

      {/* Impact on loan eligibility */}
      <div className="loan_eligibility">
        <h1 id="impact" className="section">Impact of CIBIL score on loan eligibility</h1>
        <p>A credit score plays a crucial role in determining a person’s loan eligibility and the interest rate offered by lenders. It reflects the borrower’s 
          creditworthiness based on their repayment history, credit utilization, and overall financial behavior. Individuals with high credit scores (typically 700 and above) 
          are seen as low-risk borrowers and are more likely to get their loans approved quickly, with higher loan amounts and lower interest rates. 
          On the other hand, those with low credit scores may face difficulties in getting loans approved, may be offered lower loan amounts, or may be charged higher interest 
          rates to compensate for the risk. In essence, a good credit score not only improves the chances of getting a loan but also helps in securing more favorable loan terms, 
          ultimately saving a significant amount of money over time.A higher score often leads to better terms, such as:</p>
        <ul>
          <li>Faster loan approvals</li>
          <li>Lower interest rates</li>
          <li>Higher credit limits</li>
          <li>Better negotiating power</li>
        </ul>
      </div>

      {/* Improving credit score */}
      <div className="improvement section">
        <h1 id="improve"> How to improve your credit score? </h1>
        <ul>
          <li>Start paying your loan EMIs and credit card bills on time. Do not miss payments under any circumstances.</li>
          <li>Reduce your excessive dependency on credit and try to reduce your credit utilization ratio, especially if you max out your credit card limit regularly</li>
          <li>In case of errors in your credit report, get it rectified at the earliest from the credit bureau. For this, you should check your credit score online regularly and if there’s a fall, do check the report for errors.</li>
          <li>Avoid applying for multiple loans or credit cards very frequently. It is advisable to wait for six months to avail the latest credit instrument before you apply for credit again.</li>
          <li>Avoid closing your oldest credit card. A longer credit history helps lenders make credit-related decisions with more confidence.</li>
          <li>Keep a good mix of secured (home loan, car loan, etc.) and unsecured credit (personal loan, credit card, etc.) in your profile.</li>
        </ul>
      </div>

    </div>
  );
}
