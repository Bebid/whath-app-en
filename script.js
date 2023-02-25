const oForm = {
    init: function () {
        this.oPages = {
            1: {
                section: "what-happened",
                answers: {
                    Y: {
                        section: "fix-it",
                        answers: {
                            Y: {
                                result: "Try to fix it!",
                            },
                            N: {
                                result: "Do better next time.",
                            },
                        },
                    },
                    N: {
                        section: "do-it",
                        answers: {
                            Y: {
                                result: "Find a way to do it.",
                            },
                            N: {
                                result: "Forgive yourself!",
                            },
                        },
                    },
                },
            },
        };
        this.aChoiceHistory = [1];

        [...document.querySelectorAll(".btn-proceed")].forEach((oElement) => {
            oElement.addEventListener("click", this._goToNextPage.bind(this));
        });
        [...document.querySelectorAll(".link-return")].forEach((oElement) => {
            oElement.addEventListener("click", this._goToPrevPage.bind(this));
        });
    },

    _goToNextPage: function (oEvent) {
        const oCurrentPage = this._getPageByHistory();
        this.aChoiceHistory.push(oEvent.target.dataset.value);
        const oNextPage = this._getPageByHistory();

        document.getElementById(
            `section-${oCurrentPage.section}`
        ).style.display = "none";

        if (oNextPage.result) {
            oResultText = document.querySelector("#section-results h2");
            oResultText.innerHTML = oNextPage.result;
            document.getElementById(`section-results`).style.display = "block";
            return;
        }

        document.getElementById(`section-${oNextPage.section}`).style.display =
            "block";
    },

    _getPageByHistory: function () {
        let oPage;
        this.aChoiceHistory.forEach((sKey) => {
            oPage = !oPage ? this.oPages[sKey] : oPage.answers[sKey];
        });
        return oPage;
    },

    _goToPrevPage: function () {
        const oCurrentPage = this._getPageByHistory();
        this.aChoiceHistory.pop();
        const oPrevPage = this._getPageByHistory();

        document.getElementById(
            `section-${oCurrentPage.section}`
        ).style.display = "none";
        document.getElementById(`section-${oPrevPage.section}`).style.display =
            "block";
    },
};

oForm.init();
