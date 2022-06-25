import { useState } from "react"

const Main = () => {
  const cant = document.getElementById('cant');
  const peeps = document.getElementById('peeps')
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState();
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const tipPercent = document.querySelectorAll('.spanee');

  tipPercent.forEach((eachTip, index) => {
    eachTip.addEventListener('click', () => {
      tipPercent.forEach((eachTip, i) => {
        if (i == index) {
          eachTip.classList.add('teps')
          if (i == 0) {
            setPercent(5)
          } else if (i == 1) {
            setPercent(10)
          } else if (i == 2) {
            setPercent(15)
          } else if (i == 3) {
            setPercent(25)
          } else if (i == 4) {
            setPercent(50)
          }
        } else if (i !== index) {
          eachTip.classList.remove('teps')
        }
      })
    })
  })

  const handleClick = () => {
    const round = ((bill * (percent / 100)) / people).toFixed(2);
    const round2 = (bill * (percent / 100)).toFixed(2);

    setTip(round);
    setTotal(round2);

    if (people === 0) {
      cant.classList.add('can');
      peeps.classList.add('pe');

      setTip('0.00');
      setTotal('0.00');

    } else {
      cant.classList.remove('can');
      peeps.classList.remove('pe');
    }
  }

  return (
    <main>
      <div className="sub-main">
        <div className="one">
          <div className="inner-one">
            <p className="bill">Bill</p>
            <div className="input">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>
              <span>
                <input type="text" name="" placeholder="0" value={bill} onChange={e => setBill(+e.target.value)} />
              </span>
            </div>
          </div>

          <div className="inner-two">
            <p className="tip">Select Tip %</p>

            <div className="grid">
              <span className="spans spanee" > 5 <span>%</span> </span>
              <span className="spans spanee" > 10 <span>%</span></span>
              <span className="spans spanee"> 15 <span>%</span> </span>
              <span className="spans spanee"> 25 <span>%</span> </span>
              <span className="spans spanee"> 50 <span>%</span> </span>
              <span className="spans custom-span"> <input type="text" placeholder="Custom" onChange={e => setPercent(e.target.value)} /></span>
            </div>
          </div>

          <div className="inner-three">
            <div className="people">
              <p> Number of People </p>
              <span id="cant">Can't be zero</span>
            </div>
            <div className="input-two">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" /></svg>
              <span>
                <input type="text" name="" id="peeps" placeholder="0" value={people} onChange={e => setPeople(+e.target.value)} />
              </span>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="inner-inner">
            <div className="first">
              <div className="tip-amount">
                <div className="tipper">
                  <p>Tip Amount</p>
                  <span>/ person</span>
                </div>
                <div className="num">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="hsl(172, 67%, 45%)" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>
                  <span> {tip}</span>
                </div>
              </div>

              <div className="total">
                <div className="totaler">
                  <p>Total</p>
                  <span>/ person</span>
                </div>
                <div className="num-two">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17"><path fill="hsl(172, 67%, 45%)" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" /></svg>
                  <span>{total} </span>
                </div>
              </div>
            </div>

            <div className="second">
              <div className="reset" onClick={handleClick}>
                <p> Reset </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
