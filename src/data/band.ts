import { Band } from "@/type/band"

export const bands: Band[] = [
    {
        id: 1,
        name: "Chase Atlantic",
        genre: "alternative R&B, alternative pop, synth-pop, and trap",
        description:"Chase Atlantic คือวงดนตรีที่สร้างสรรค์ดนตรีแนว Alternative R&B และ Pop โดยผสมผสานองค์ประกอบของ Synth-Pop และ Trap เข้าด้วยกันจนเกิดเป็นเอกลักษณ์เฉพาะตัว",
        image: "/images/bands/ChaseAtlantic.jpg",
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
    }        
];
