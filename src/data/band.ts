import { Band } from "@/type/band"

export const bands: Band[] = [
    {
        id: 1,
        name: "Chase Atlantic",
        genre: "alternative R&B, alternative pop, synth-pop, and trap",
        description: "วงดนตรีที่สร้างสรรค์ดนตรีแนว Alternative R&B และ Pop โดยผสมผสานองค์ประกอบของ Synth-Pop และ Trap เข้าด้วยกันจนเกิดเป็นเอกลักษณ์เฉพาะตัว",
        image: "/images/band/ChaseAtlantic.jpg",
        members: [
            {
                id: 1,
                name: "Mitchel Cave",
                role: "Lead Vocals",
            },
            {
                id: 2,
                name: "Christian Anthony",
                role: "Vocals,Guitar",
            },
            {
                id: 3,
                name: "Clinton Cave",
                role: "Lead Guitar,Saxophone,Main Production",
            },
        ]
    },
    {
        id: 2,
        name: "Radio Head",
        genre: "Rock",
        description:"วงร็อกระดับตำนานจากอังกฤษ ก่อตั้งขึ้นในปี 1985 พวกเขาขึ้นชื่อเรื่องดนตรีแนวทดลองที่ล้ำสมัย",
        image: "/images/band/radiohead.jpg",
        members: [
            {
                id: 1,
                name: "Thom Yorke",
                role: "Lead vocals, guitar",
            },
            {
                id: 2,
                name: "Jonny Greenwood",
                role: "Lead guitar, keyboards",
            },
            {
                id: 3,
                name: "Colin Greenwood",
                role: "Bass guitar",
            },
            {
                id: 4,
                name: "Ed O'Brien",
                role: "Guitar, backing vocals",
            },
            {
                id: 5,
                name: "Philip Selway",
                role: "Drums",
            },
        ],
    },
    {
        id: 3,
        name: "Coldplay",
        genre: "Rock / Pop Rock",
        description:
            "วงป็อปร็อกระดับโลกจากอังกฤษ ก่อตั้งขึ้นในปี 1996 พวกเขาเป็นหนึ่งในวงดนตรีที่ประสบความสำเร็จที่สุดในยุคปัจจุบัน",
        image: "/images/band/coldplay.jpg",
        members: [
            {
                id: 1,
                name: "Chris Martin",
                role: "Lead vocals, guitar",
            },
            {
                id: 2,
                name: "Jonny Buckland",
                role: "Lead guitar",
            },
            {
                id: 3,
                name: "Guy Berryman",
                role: "Bass guitar",
            },
            {
                id: 4,
                name: "Will Champion",
                role: "Drums, backing vocals",
            },
        ],
    },
];
