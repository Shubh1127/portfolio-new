declare module 'ogl' {
    export type OGLRenderingContext =
        | WebGLRenderingContext
        | WebGL2RenderingContext;

    export class Renderer {
        gl: OGLRenderingContext;
        constructor(options?: Record<string, unknown>);
        setSize(width: number, height: number): void;
        setPixelRatio(ratio: number): void;
        render(options?: Record<string, unknown>): void;
    }

    export class Camera {
        fov: number;
        aspect: number;
        position: { x: number; y: number; z: number };
        constructor(gl: OGLRenderingContext, options?: Record<string, unknown>);
        perspective(options?: Record<string, unknown>): void;
    }

    export class Transform {
        position: { x: number; y: number; z: number };
        scale: { x: number; y: number; z: number };
        rotation: { x: number; y: number; z: number };
        setParent(parent: Transform | null): void;
    }

    export class Plane {
        constructor(gl: OGLRenderingContext, options?: Record<string, unknown>);
    }

    export class Program {
        uniforms: Record<string, { value: unknown }>;
        constructor(gl: OGLRenderingContext, options?: Record<string, unknown>);
    }

    export class Mesh {
        position: { x: number; y: number; z: number };
        scale: { x: number; y: number; z: number };
        rotation: { x: number; y: number; z: number };
        constructor(gl: OGLRenderingContext, options?: Record<string, unknown>);
        setParent(parent: Transform | null): void;
    }

    export class Texture {
        image: HTMLImageElement | HTMLCanvasElement | ImageBitmap | null;
        constructor(gl: OGLRenderingContext, options?: Record<string, unknown>);
    }
}
