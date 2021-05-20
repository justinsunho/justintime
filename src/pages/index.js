import React from "react";
import { Hero } from "components/organisms";
import { MainLayout } from "components/layouts";

const Index = () => {
    return (
        <MainLayout>
            <Hero button description={"This is the description"} headingText={"This is the heading"} />
        </MainLayout>
    );
};

export default Index;
