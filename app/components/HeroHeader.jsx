import Image from 'next/image';

export default function HeroHeader() {
    return (
        <div>
            <h1>Mikey</h1>
            <p>10:00am</p>
            <Image src="/images/me.png" alt="Mikey's Image" width={100} height={100}/>
        </div>
    )
}