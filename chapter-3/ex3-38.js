function flip(f) {
    return 'flipped it';
}
flip(1 /* Flippable.Chair */); // 'flipped it'
flip(2 /* Flippable.Cup */); // 'flipped it'
flip(12); // 'flipped it' (!!!)
