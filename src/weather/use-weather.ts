import { useOpenWeatherMapAPI } from '../use-openweathermap-api/src';

export const useWeather = (position: Position) => {
    return useOpenWeatherMapAPI({
        key: '86bdab572a175cdb12b956ea03bba874',
        queryConfig: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        },
        queryType: 'geo',
        units: 'metric',
    });
};
