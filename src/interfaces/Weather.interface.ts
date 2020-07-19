export default interface weatherinfo{
    city: string;
    id: number;
    icon: string;
    celsius: number;
    temp_max: number;
    temp_min: number;
    description: string;
    error: boolean;
}