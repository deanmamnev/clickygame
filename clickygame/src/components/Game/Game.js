import React, { Component } from 'react';
import ImageCard from '../ImageCard';
import images from "../../images.json";
import "./Game.css";

class Game extends Component {
    state = {
        images,
        message: "Click an image to start!",
        score: 0,
        topScore: 0
    };

    handleClick = (id, clicked) => {
        const imageOrder = this.state.images

        if (clicked) {
            imageOrder.forEach((image, index) => 
            {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() =>
                Math.random() - 0.5),
                message: "Wrong!",
                score: 0
            })
        }
        else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                }
            });

            const { topScore, score} =
            this.state;
            const newScore = score + 1;
            const newTopScore = newScore >
            topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() =>
                Math.random() - 0.5),
                message: "Correct!",
                score: newScore,
                topScore: newTopScore,
            })
        }
    }

    render() {
        return (
            <div className="container-fluid cardContainer">
                <div className="message text-center">
                    <p> {this.state.message} </p>
                    </div>
                    <div className="gameScore text-center">
                        <p>Score: {this.state.score}
                          /  Top Score:
                          {this.state.topScore}</p>
                    </div>
                    <div className="container">

                        <div className="row">
                            {this.state.images.map(image => (
                                <ImageCard
                                    key={image.id}
                                    id={image.id}
                                    name={image.name}
                                    clicked={image.clicked}
                                    image={image.image}
                                    handleClick={this.handleClick}
                                    />
                            ))}
                        </div>
                    </div>
                </div>

        )
    }
}

export default Game;