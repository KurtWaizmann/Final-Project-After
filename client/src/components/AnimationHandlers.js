// HOMEPAGE

export const animateIntro = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 3
        }
    }
}

export const animateIntro2 = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 3
        }
    }
}

export const animateImageRight = {
    start: {
        x: 100,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

export const animateText = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.5,
            delay: 0.5,
        }
    }
}
export const animateImageLeft = {
    start: {
        x: -100,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

export const animateContinue = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 2,
            repeat: false,
        }
    }
}

export const quizTransition = {
    in: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            type: "tween",
            ease: "anticipate"
        }
    },
    out: {
        opacity: 0,
        x: "100vh",
        transition: {
            duration: 2,
            type: "tween",
            ease: "anticipate"
        }
    }
}

export const pageTransition = {
    in: {
        opacity: 1,
        transition: {
            duration: 3,
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: 3,

        }
    }
}

export const buttonHover = {
    start: {
        y: "0px",
    },
    end: {
        y: "-10px",
        transition: {
            type: "spring",
            stiffness: 1000,
            damping: 10,
            ease: "easeInOut",
        }
    }
}