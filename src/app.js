import React from 'react';
import TwoColImgText from './components/Features';
import Features from './components/Features';

const App = () => {

    return (
        <>
            <Features className="features features--left">
                <Features.Img
                    src="https://www.thatcocktail.com/wp-content/uploads/2019/08/moscow-mule-recipe-1.jpeg"
                    alt="How to Make a Moscow Mule" />
                <Features.Text className="features__text">
                    <Features.Title>How to Make a Moscow Mule</Features.Title>
                    <p>Looking for the perfect Moscow Mule recipe? Don’t worry, I’ve got ya covered!</p>

                    <p>You’re gonna learn:</p>
                    <ul>
                        <li>How to make a great Moscow Mule.</li>
                        <li>Where the cocktail came from (allegedly).</li>
                        <li>The cocktails calorie count.</li>
                        <li>nd a whole lot more.</li>
                    </ul>

                </Features.Text>
            </Features>

            <Features className="features features--right">
                <Features.Img
                    src="https://www.thatcocktail.com/wp-content/uploads/2020/02/how-to-make-an-espresso-martini-1.png."
                    alt="How to Make an Expresso Martini" />
                <Features.Text className="features__text">
                    <Features.Title>How to Make an Espresso Martini</Features.Title>
                    <p>Wanna know how to make an Espresso Martini at home? Don’t worry! I’ve got ya covered!</p>

                    <p>A good Espresso Martini is fierce, delicious and a perfect pep on a night out drinking. Also, they’re classy AF.</p>

                    <p>In this article, I’m going to show exactly how to to make an Espresso Martini at home and a whole lot more.</p>

                </Features.Text>
            </Features>
        </>
    )
}

export default App;