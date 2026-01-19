import Link from 'next/link';
import styles from './nav.module.css';

const Logo = () => {
    return (
        <div className={styles.name}>
            <Link className={styles.nameLink} href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="50"
                    height="50"
                    role="img"
                    aria-label="Blue classy letter E"
                >
                    <defs>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1E3C72" />
                            <stop offset="100%" stopColor="#2A5298" />
                        </linearGradient>

                        <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
                            <feDropShadow
                                dx="0"
                                dy="2"
                                stdDeviation="2"
                                floodColor="#000000"
                                floodOpacity="0.25"
                            />
                        </filter>
                    </defs>

                    <path
                        d="M45 32 H138 V48 H72 V86 H132 V102 H72 V140 H138 V156 H45 Z"
                        fill="url(#blueGrad)"
                        filter="url(#shadow)"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default Logo;
