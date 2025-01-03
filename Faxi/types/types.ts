import { ImageSourcePropType } from "react-native";

export type Slide = {
    id: string;
    image: ImageSourcePropType;
}
export type SwiperProps = {
    data: Slide[];
    autoplay?: boolean;
    autoplayInterval?: number;
    showPagination?: boolean; 
    showButtons?: boolean;
}