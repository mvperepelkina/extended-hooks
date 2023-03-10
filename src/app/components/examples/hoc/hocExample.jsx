import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsAndStyles from "./withPropsAndStyles";
const HOCExample = () => {
    const ComponentWithLogin = withLogin(Component);
    const ComponentWithPropsAndStyles = withPropsAndStyles(Component);
    const ElseComponent = withPropsAndStyles(ComponentWithLogin);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithLogin />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsAndStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <ElseComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
