"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import htmlIcon from '../../assets/code/html-5.png';
import cssIcon from '../../assets/code/css-3.png';
import sassIcon from '../../assets/code/sass.png';
import nextjsIcon from '../../assets/code/nextjs.png';
import reactIcon from '../../assets/code/react.png';
import angularIcon from '../../assets/code/angular.png';
import jsIcon from '../../assets/code/js.png';
import tsIcon from '../../assets/code/ts.png';
import tailwindIcon from '../../assets/code/tailwind css.png';
import bootstrapIcon from '../../assets/code/bootstrap.png';
import materialuiIcon from '../../assets/code/miui log.jpg';
import antdIcon from '../../assets/code/antd.png';
import shadcnIcon from '../../assets/code/shadecn.png';
import reduxIcon from '../../assets/code/redux.png';
import zustandIcon from '../../assets/code/zustand.jpg';
import nodejsIcon from '../../assets/code/node-js.png';
import expressIcon from '../../assets/code/express.png';
import axiosIcon from '../../assets/code/axios.png';
import postgresqlIcon from '../../assets/code/Postgresql.png';
import graphqlIcon from '../../assets/code/graphql.png';
import mongodbIcon from '../../assets/code/mongodb.png';
import firebaseIcon from '../../assets/code/firebase.png';
import mongooseIcon from '../../assets/code/mongoose.png';
import jwtIcon from '../../assets/code/jwt.png';
import githubIcon from '../../assets/github1.png';
import gitlabIcon from '../../assets/code/gitlab.png';
import cypressIcon from '../../assets/code/cypress.png';
import "./Technologies.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="technologies" className="   py-20" >
            <div className="text-center mb-10">
                <p className="animate-pulse">Explore My</p>
                <h1 className="md:text-4xl font-bold">&lt;Technologies/&gt;</h1>
            </div>

            {/* <div className=' ' > */}
            <div className=" ">
                {/* Frontend Development */}
                <div className="   ">
                    <h2 className="text-xl font-bold   mb-5 text-center underline"> &#123; Frontend Development &#125;</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-4 justify-items-center ">
                        {/* HTML */}
                        <div
                            data-aos="zoom-in"

                            className="flex items-center html techs  ">
                            <Image
                                src={htmlIcon}
                                alt="HTML icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold">HTML</h3>
                                <p className="text-sm">Experienced</p>
                            </div>
                        </div>

                        {/* CSS */}
                        <div
                            data-aos="zoom-out"


                            className="flex items-center css techs">
                            <Image
                                src={cssIcon}
                                alt="CSS icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold">CSS</h3>
                                <p className="text-sm">Experienced</p>
                            </div>
                        </div>

                        {/* SASS */}
                        <div
                            data-aos="zoom-in"

                            className="flex items-center techs sass">
                            <Image
                                src={sassIcon}
                                alt="SASS icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold">SASS</h3>
                                <p className="text-sm">Intermediate</p>
                            </div>
                        </div>

                        {/* Next.js */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs nextJs">
                            <Image
                                src={nextjsIcon}
                                alt="Next.js icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold">Next Js</h3>
                                <p className="text-sm">Intermediate</p>
                            </div>
                        </div>

                        {/* React.js */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs reactJs">
                            <Image
                                src={reactIcon}
                                alt="React.js icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">React Js</h3>
                                <p className="text-sm text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Angular.js */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs angularJs text-center">
                            <Image
                                src={angularIcon}
                                alt="Angular.js icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Angular Js</h3>
                                <p className="text-sm ">Basic</p>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs js">
                            <Image
                                src={jsIcon}
                                alt="JavaScript icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">JavaScript</h3>
                                <p className="text-sm text-center font-bold">Experienced</p>
                            </div>
                        </div>

                        {/* TypeScript */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs ts">
                            <Image
                                src={tsIcon}
                                alt="TypeScript icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold ">TypeScript</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Tailwind */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs tailwind">
                            <Image
                                src={tailwindIcon}
                                alt="Tailwind icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg symbol font-bold">Tailwind</h3>
                                <p className="text-sm font-bold text-center ">Experienced</p>
                            </div>
                        </div>

                        {/* Bootstrap */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs bootstrap">
                            <Image
                                src={bootstrapIcon}
                                alt="Bootstrap icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">Bootstrap</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Material-UI */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs material">
                            <Image
                                src={materialuiIcon}
                                alt="Material-UI icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">MI-UI</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>

                        {/* Ant Design */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs antd" >
                            <Image
                                src={antdIcon}
                                alt="Ant Design icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">Ant Design</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>

                        {/* Shadcn/ui */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs shadecn">
                            <Image
                                src={shadcnIcon}
                                alt="Shadcn/ui icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">Shadcn/ui</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>

                        {/* Redux */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  techs redux">
                            <Image
                                src={reduxIcon}
                                alt="Redux icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">Redux</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>

                        {/* Zustand */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs zustand">
                            <Image
                                src={zustandIcon}
                                alt="Zustand icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-bold symbol">Zustand</h3>
                                <p className="text-sm font-bold text-center">Basic</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="mb-12">

                    <h2 className="text-xl font-bold   my-10 text-center underline"> &#123; Backend Development &#125;</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-4 justify-items-center ">
                        {/* Node.js */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center techs nodejs">
                            <Image
                                src={nodejsIcon}
                                alt="Node.js icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Node JS</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>

                        {/* Express.js */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  techs expressjs">
                            <Image
                                src={expressIcon}
                                alt="Express.js icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Express js</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Axios */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  text-center techs axios">
                            <Image
                                src={axiosIcon}
                                alt="Axios icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Axios</h3>
                                <p className="text-sm font-bold  ">Intermediate</p>
                            </div>
                        </div>

                        {/* PostgreSQL */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  text-center  techs postgresql">
                            <Image
                                src={postgresqlIcon}
                                alt="PostgreSQL icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">PostgreSQL</h3>
                                <p className="text-sm font-bold">Intermediate</p>
                            </div>
                        </div>

                        {/* GraphQL */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center text-center  techs graphql">
                            <Image
                                src={graphqlIcon}
                                alt="GraphQL icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">GraphQL</h3>
                                <p className="text-sm font-bold text-center">Basic</p>
                            </div>
                        </div>

                        {/* MongoDB */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center text-center  techs  mongodb">
                            <Image
                                src={mongodbIcon}
                                alt="MongoDB icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">MongoDB</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Firebase */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center text-center  techs firebase">
                            <Image
                                src={firebaseIcon}
                                alt="Firebase icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Firebase</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Mongoose */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center text-center  techs mongoose">
                            <Image
                                src={mongooseIcon}
                                alt="Mongoose icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Mongoose</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* JWT */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center text-center  techs  jwt">
                            <Image
                                src={jwtIcon}
                                alt="JWT icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">JWT</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>


                    </div>
                </div>
                {/* tools Development */}
                <div className="mb-12">

                    <h2 className="text-xl font-bold   my-5 text-center underline"> &#123; Tools &#125;</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 justify-items-center ">


                        {/* Github */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  text-center  techs github">
                            <Image
                                src={githubIcon}
                                alt="Github icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Github</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Gitlab */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  text-center  techs gitlab ">
                            <Image
                                src={gitlabIcon}
                                alt="Gitlab icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Gitlab</h3>
                                <p className="text-sm font-bold text-center">Experienced</p>
                            </div>
                        </div>

                        {/* Cypress */}
                        <div
                            data-aos="zoom-in"
                            className="flex items-center  text-center  techs cypress">
                            <Image
                                src={cypressIcon}
                                alt="Cypress icon"
                                width={40}
                                height={40}
                                className="mr-3 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg  symbol font-bold">Cypress</h3>
                                <p className="text-sm font-bold text-center">Intermediate</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
