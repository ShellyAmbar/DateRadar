import { Animated } from "react-native";

//For now, support timing type only.
interface AnimationConfig extends Animated.TimingAnimationConfig {};
class AnimationService {
    constructor(private config:AnimationConfig){
        this.config = this.config;
    }
    create(animatedValue: Animated.Value){
        return Animated.timing(animatedValue, this.config)
    }
}

export default AnimationService;