import { useState } from "react";
import styles from "./login-page.module.scss"

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    return (
        <>
            <main className={styles.page}>
                <div className={styles.imageCnr}>
                    <img src="images/landing.png" alt="landing" className={styles.landingImg} />
                </div>
                <div className={styles.formCnr}>
                    <img src="images/instagram-text-logo.png" alt="logo" className={styles.logo} />
                    <form className={styles.loginForm}>
                        <div className={styles.inputCnr}>
                            <label>
                                Phone number, username, or email
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputCnr}>
                            <label>
                                Password
                            </label>
                            <input type={buttonVisible ? "text" : "password"} />
                            {
                                buttonVisible &&
                                <button
                                    className={styles.passwordToggleBtn}
                                    type="button"
                                    onClick={() => setPasswordVisible(prev => !prev)}
                                >
                                    {passwordVisible ? "Hide" : "Show"}
                                </button>
                            }
                        </div>
                    </form>

                    <button className={styles.loginBtn} type="submit">Log in</button>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default LoginPage;