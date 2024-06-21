function TitleSection() {
    return (
        <div class="row">

            <div class="col-5">
                <img class="cat" src={process.env.PUBLIC_URL + "/img/Logo-cat-cup.png"} alt="cat logo" width="500" />
            </div>

            <div class="col-7">
                <p class="tagline">
                    <strong>Oracle Certified Associate Java (OCA)</strong>
                    <br />
                    <strong>Let's solve tricky sample questions!</strong>
                    <br />
                    簡単で面白いオラクル認定資格試験練習問題を解こう！
                </p>
            </div>

        </div>
    )
}

export default TitleSection