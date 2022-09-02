import Head from 'next/head';
import Image from 'next/image';
import Button from '../src/component/Button';
import styles from '../styles/Home.module.css';
import Flex_First from './flex/1';

export default function Home() {
    return (
        <div className={styles.container}>
            <Button>asdf</Button>
            <Button disabled={false}>asdf</Button>
            <Flex_First></Flex_First>
        </div>
    );
}
