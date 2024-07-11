import React, { useState,useRef, useEffect} from 'react';

const Game = () => {
    const canvasRef = useRef(null);
    const [player, setPlayer] = useState({ x: 50, y: 50 });
    const [obstacles, setObstacles] = useState([{ x: 300, y: 50 }]);
    const [isRunning, setIsRunning] = useState(true); //boolean값 설정
    const playerImageRef = useRef(null);
    const obstacleImageRef = useRef(null);

    useEffect(() => {
        const playerImg = new Image();
        console.log()
        playerImg.src = process.env.PUBLIC_URL + '/player.png';
        playerImg.onload = () => {
            playerImageRef.current = playerImg;
            console.log('Player 이미지 가져오기 성공');
        };
        playerImg.onerror = () => {
            console.error('Player 이미지 가져오기 실패');
        };

        const obstacleImg = new Image();
        obstacleImg.src = process.env.PUBLIC_URL + '/obstacle.png';
        obstacleImg.onload = () => {
            obstacleImageRef.current = obstacleImg;
            console.log('Obstacle 이미지 가져오기 실패');
        };
        obstacleImg.onerror = () => {
            console.error('Obstacle 이미지 가져오기 실패');
        };
    }, []);


    useEffect(() => {
        const handleKeyDown = (event) => {
            let newPlayer = { ...player };
            switch (event.key) {
                case 'ArrowUp':
                    newPlayer.y = Math.max(newPlayer.y - 40, 0);
                    break;
                case 'ArrowDown':
                    newPlayer.y = Math.min(newPlayer.y + 40, canvasRef.current.height - 40);
                    break;
                case 'ArrowLeft':
                    newPlayer.x = Math.max(newPlayer.x - 40, 0);
                    break;
                case 'ArrowRight':
                    newPlayer.x = Math.min(newPlayer.x + 40, canvasRef.current.width - 40);
                    break;
                default:
                    break;
            }
            setPlayer(newPlayer);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [player]);


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const updateGame = () => {
            if (!isRunning) return;

            context.clearRect(0, 0, canvas.width, canvas.height);


            if (playerImageRef.current) {
                context.drawImage(playerImageRef.current, player.x, player.y, 40, 40);
            } else {
                context.fillStyle = 'blue';
                context.fillRect(player.x, player.y, 40, 40);
            }


            let newObstacles = obstacles.map(obstacle => ({
                ...obstacle,
                x: obstacle.x - 5
            })).filter(obstacle => obstacle.x > 0);


            newObstacles.forEach(obstacle => {
                if (obstacleImageRef.current) {
                    context.drawImage(obstacleImageRef.current, obstacle.x, obstacle.y, 40, 40);
                } else {
                    context.fillStyle = 'red';
                    context.fillRect(obstacle.x, obstacle.y, 40, 40);
                }

                if (
                    player.x < obstacle.x + 20 &&
                    player.x + 20 > obstacle.x &&
                    player.y < obstacle.y + 20 &&
                    player.y + 20 > obstacle.y
                ) {
                    setIsRunning(false);
                }
            });

            setObstacles(newObstacles);
        };

        const interval = setInterval(updateGame, 1000 / 60); 
        return () => clearInterval(interval);
    }, [player, obstacles, isRunning]);
    useEffect(() => {
        const addObstacle = () => {
            if (!isRunning) return;

            const newObstacle = {
                x: canvasRef.current.width,
                y: Math.random() * (canvasRef.current.height - 40) 
            };
            setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
        };

        const interval = setInterval(addObstacle, 200); 
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="game-container">
            <canvas ref={canvasRef} width="1000" height="800" className="game-canvas" />
            <button onClick={() => setIsRunning(!isRunning)} className="game-button">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {!isRunning && <h2>Game Over</h2>}
        </div>
    );
};

export default Game;





