export interface ProducerAwardInterval {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface ProducerAwardIntervalDTO {
    min: ProducerAwardInterval[];
    max: ProducerAwardInterval[];
}
