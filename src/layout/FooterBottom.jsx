export default function FooterBottom() {
    return (
        <div className="container-fluid d-grid footerbottom">
            <div className="row">
                <div className="col-auto">
                    <span>© Bennx </span>
                </div>

                <div className="col text-end">
                    <span>Build with </span>

                    <img src={`${import.meta.env.BASE_URL}/images/icons/React-icon.svg`}
                         alt="Spring" width="16" height="16"/>

                    <span> React and </span>

                    <img src={`${import.meta.env.BASE_URL}/images/icons/Spring_Boot.svg`}
                         alt="Spring" width="16" height="16"/>

                    <span> Spring Mvc / Data</span>
                </div>
            </div>
        </div>
    );
}