import axios from "axios";
import { useState, useEffect, useRef } from "react";

const karImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#4d7c0f"
    viewBox="0 0 256 256"
  >
    <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
  </svg>
);

const zararImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#b91c1c"
    viewBox="0 0 256 256"
  >
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

const bakiyeImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path>
  </svg>
);

const date = new Date();
date.setDate(date.getDate() - 2);
const year = date.getFullYear();
const month = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
const day = (date.getDate() < 10 ? "0" : "") + date.getDate();

const yesterdayDate = `${year}-${month}-${day}`;
console.log("yesterday", yesterdayDate);

function Cur() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("TRY");
  const [converted, setConverted] = useState("");
  const [oldCur, setOldCur] = useState("");
  const [status, setStatus] = useState(false);
  const [rates, setRates] = useState("");

  const data = useRef();
  let currentAmount;

  useEffect(() => {
    currentAmount = localStorage.getItem("bakiye");
    if (currentAmount) {
      setAmount(currentAmount);
      setStatus(true);
    }
  }, []);

  useEffect(
    function () {
      if (!amount) return;
      async function convert() {
        const guncelkur = await axios.get(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );

        const eskikur = await axios.get(
          `https://api.frankfurter.app/${yesterdayDate}?amount=${amount}&from=${fromCur}&to=${toCur}`
        );

        const digerkurlar = await axios.get(
          `https://api.frankfurter.app/latest?amount=${amount}`
        );

        setOldCur(eskikur.data.rates[toCur]);

        setConverted(guncelkur.data.rates[toCur]);

        setRates(digerkurlar.data.rates);

        console.log("Güncel KUR", guncelkur);
        console.log("Önceki KUR", eskikur);
        console.log("link", rates);
      }

      if (fromCur === toCur) return setConverted(amount);

      convert();
    },
    [amount, fromCur, toCur, oldCur]
  );

  console.log(amount);
  const handleClick = () => {
    setStatus(true);
    localStorage.setItem(data.current.name, amount);
    currentAmount = localStorage.getItem(data.current.name);
    setAmount(currentAmount);
  };

  const handleKeyDown = (e) => {
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete"];

    if ((e.key >= "0" && e.key <= "9") || allowedKeys.includes(e.key)) {
      if (e.target.value === "" && e.key === "") {
        setAmount("");
      } else {
        setAmount(Number(e.target.value));
      }
    } else {
      e.preventDefault();
    }
    localStorage.setItem(data.current.name, amount);
    currentAmount = localStorage.getItem(data.current.name);
    setAmount(currentAmount);
    if (e.key === "Enter") setStatus(true);
  };

  return (
    <div className="container-cur">
      <div className="bakiye">
        {status ? (
          <div></div>
        ) : (
          <>
            {" "}
            <span class="bakiyegir">Bakiye Giriniz</span>
            <div class="bakiye-container">
              <span class="bakiye-icon">{bakiyeImage}</span>
              <input
                name="bakiye"
                className="button input bakiyeinput"
                ref={data}
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                onKeyDown={handleKeyDown}
              ></input>
            </div>
            {!status && (
              <button
                onClick={handleClick}
                className={"button onayla" + (status ? "yenidenbakiye" : "")}
              >
                ONAYLA
              </button>
            )}
          </>
        )}
        {amount && status && (
          <div className="select-container">
            <span>
              {" "}
              <span className="bakiyeniz">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                  />
                </svg>
                <span class="bakiyeniz-text">{`Bakiyeniz : ${amount}`}</span>
                <button
                  className={"button yeniden" + (status ? "" : "yenidenbakiye")}
                  onClick={() => {
                    setStatus(false);
                  }}
                >
                  X
                </button>
              </span>
            </span>

            <div className="select-buttons">
              <select
                className="button select"
                value={fromCur}
                onChange={(e) => setFromCur(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="INR">INR</option>
              </select>
              <select
                className="button select"
                value={toCur}
                onChange={(e) => setToCur(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
        )}

        {console.log(status)}
        <>
          <p class={`rate-text ${amount == 0 ? "none" : ""}`}>
            {amount && status && (
              <>
                {converted > oldCur ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-101.66a8,8,0,0,1-11.32,11.32L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
                  </svg>
                )}

                {`GÜNCEL KUR: ${Number(converted).toFixed(2)} ${toCur}`}
              </>
            )}{" "}
            <br />
            {amount && status && (
              <>
                {oldCur > converted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-101.66a8,8,0,0,1-11.32,11.32L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
                  </svg>
                )}
                {`ÖNCEKİ KUR: ${Number(oldCur).toFixed(2)} ${toCur}`}
              </>
            )}{" "}
            <br />
            {amount && status && (
              <>
                {converted - oldCur > 0 ? (
                  <>
                    {karImage} KAR : {Math.abs(converted - oldCur).toFixed(2)}
                  </>
                ) : (
                  <>
                    {zararImage} ZARAR :{" "}
                    {Math.abs(converted - oldCur).toFixed(2)}
                  </>
                )}
              </>
            )}
            {amount && status && toCur}
          </p>
        </>
        {status && (
          <>
            <div class="one-4">
              <span>{`($) AUD: ${rates["AUD"]}`}</span>
              <span>{`(лв) BGN: ${rates["BGN"]}`}</span>
              <span>{`(R$) BRL: ${rates["BRL"]}`}</span>
              <span>{`($) CAD: ${rates["CAD"]}`}</span>
            </div>
            <div class="two-3">
              <span>{`(CHF) CHF: ${rates["CHF"]}`}</span>
              <span>{`(¥) CNY: ${rates["CNY"]}`}</span>
              <span>{`(Kč) CZK: ${rates["CZK"]}`}</span>
            </div>
            <div class="three-4">
              <span>{`(kr) DKK: ${rates["DKK"]}`}</span>
              <span>{`(£) GBP: ${rates["GBP"]}`}</span>
              <span>{`($) HKD: ${rates["HKD"]}`}</span>
              <span>{`(Ft) HUF: ${rates["HUF"]}`}</span>
            </div>
            <div class="four-3">
              <span>{`(Rp) IDR: ${rates["IDR"]}`}</span>
              <span>{`(₪) ILS: ${rates["ILS"]}`}</span>
              <span>{`(₹) INR: ${rates["INR"]}`}</span>
            </div>
            <div class="five-4">
              <span>{`(kr) ISK: ${rates["ISK"]}`}</span>
              <span>{`(¥) JPY: ${rates["JPY"]}`}</span>
              <span>{`(₩) KRW: ${rates["KRW"]}`}</span>
              <span>{`($) MXN: ${rates["MXN"]}`}</span>
            </div>
            <div class="six-3">
              <span>{`(RM) MYR: ${rates["MYR"]}`}</span>
              <span>{`(kr) NOK: ${rates["NOK"]}`}</span>
              <span>{`($) NZD: ${rates["NZD"]}`}</span>
            </div>
            <div class="seven-4">
              <span>{`(₱) PHP: ${rates["PHP"]}`}</span>
              <span>{`(zł) PLN: ${rates["PLN"]}`}</span>
              <span>{`(lei) RON: ${rates["RON"]}`}</span>
              <span>{`(kr) SEK: ${rates["SEK"]}`}</span>
            </div>
            <div class="eight-3">
              <span>{`($) SGD: ${rates["SGD"]}`}</span>
              <span>{`(฿) THB: ${rates["THB"]}`}</span>
              <span>{`(R) ZAR: ${rates["ZAR"]}`}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cur;
