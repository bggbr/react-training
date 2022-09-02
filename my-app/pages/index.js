import Head from 'next/head';
import Image from 'next/image';
import Button from '../src/component/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Button>asdf</Button>
            <Button disabled={false}>asdf</Button>
        </div>
    );
}
