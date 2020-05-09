import React from 'react';
import { useWeather } from './use-weather';

export interface WeatherProps {
    position: Position;
}

export const Weather: React.FC<WeatherProps> = ({ position }) => {
    const [state, fetchWeather] = useWeather(position);

    return (
        <main>
            <h1>Weather</h1>
            <section>
                <h4>Loading state:</h4>
                <p>{state.pending ? 'true' : 'false'}</p>
            </section>
            <section>
                <h4>Error:</h4>
                <p>{state.error ? `Error: ${state.error.cod} - ${state.error.message}` : 'Nope'}</p>
            </section>
            <section>
                <h4>Data:</h4>
                {state.data && state.data.name && state.data.main ? (
                    <>
                        <p>Weather in {state.data.name}:</p>
                        <ul>
                            <li>
                                <i className={`wi wi-owm-${state.data?.weather[0].id}`} />
                            </li>
                            <li>Currently: {state.data.main.temp} degrees</li>
                            <li>Max: {state.data.main.temp_max} degrees</li>
                            <li>Min: {state.data.main.temp_min} degrees</li>
                        </ul>
                    </>
                ) : (
                    <p>Nope</p>
                )}
            </section>
            <button onClick={fetchWeather}>Fetch weather</button>
        </main>
    );
};
