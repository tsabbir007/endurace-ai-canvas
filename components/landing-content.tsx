"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
    {
        name: "Sabbir Ahmed Talukdar",
        avatar: "J",
        image: "/sabbir.jpeg",
        title: "Software Engineer",
        description: "This is the best application I've ever used!"
    },
    {
        name: "Mostafizur Rahman",
        avatar: "A",
        image: "/musta.jpg",
        title: "Assistant Professor",
        description: "I use this daily for generating new photos!"
    },
    {
        name: "Zunnurain Tazim",
        avatar: "M",
        image: "/tazim.jpg",
        title: "Data Scientist",
        description: "This app has changed my life, cannot imagine working without it!"
    },
    {
        name: "Tanzina Iffat",
        avatar: "M",
        image: "/iffat.jpg",
        title: "Doctor",
        description: "The best in class, definitely worth the premium subscription!"
    }
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            {item.image && (
                                <Image
                                    className={`rounded-full mx-auto mb-2`}
                                    alt="logo"
                                    height={80}
                                    width={80}
                                    src={item.image}
                                />
                            )}
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};