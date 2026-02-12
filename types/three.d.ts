declare module 'three' {
    export class PerspectiveCamera {
        position: { x: number; y: number; z: number };
        aspect: number;
        constructor(fov: number, aspect: number, near: number, far: number);
        updateProjectionMatrix(): void;
        lookAt(target: unknown): void;
    }

    export class Scene {
        position: unknown;
        fog: unknown;
        add(object: unknown): void;
    }

    export class WebGLRenderer {
        constructor(options?: Record<string, unknown>);
        setPixelRatio(ratio: number): void;
        setSize(width: number, height: number): void;
        render(scene: Scene, camera: PerspectiveCamera): void;
        domElement: HTMLCanvasElement;
    }

    export class Points {
        rotation: { x: number; y: number; z: number };
        constructor(geometry: unknown, material: unknown);
    }

    export class PointsMaterial {
        constructor(options?: Record<string, unknown>);
    }

    export class BufferGeometry {
        setAttribute(name: string, attribute: unknown): void;
    }

    export class Float32BufferAttribute {
        constructor(array: number[], itemSize: number);
    }

    export class FogExp2 {
        constructor(color: number, density: number);
    }
}
