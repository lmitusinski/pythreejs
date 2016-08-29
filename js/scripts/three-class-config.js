//
// base version of this file auto-generated by generate-class-config.js
// date: Mon Aug 29 2016 10:34:23 GMT-0700 (PDT)
//

module.exports = {
 _defaults: require('./three-class-config-defaults'),

    Three_Legacy: {
        relativePath: '.',
    },
    Three: {
        relativePath: '.',
    },
    AnimationClip: {
        relativePath: 'animation',

        superDepModuleName: 'Animation',
        superDepModulePath: './base/Animation',

        pySuperModulePath: './animation/Animation',
        pySuperClass: 'Animation',

        constructorArgs: [ 'speed', 'duration' ],

        properties: {
            name: {
                defaultValue: 'TestAnimation',
                serialize: false,
                traitletType: 'Unicode(%%default%%)',
            },
            noDefault: {
                serialize: false,
                traitletType: 'Instance(Object3D)',
            },
            speed: {
                defaultValue: 20,
                serialize: false,
                traitletType: 'CInt(%%default%%)',
            },
            duration: {
                defaultValue: 100,
                serialize: false,
                traitletType: 'CInt(%%default%%)',
            }
        }
    },
    AnimationMixer: {
        relativePath: 'animation',
    },
    AnimationObjectGroup: {
        relativePath: 'animation',
    },
    AnimationUtils: {
        relativePath: 'animation',
    },
    KeyframeTrack: {
        relativePath: 'animation',
    },
    PropertyBinding: {
        relativePath: 'animation',
    },
    PropertyMixer: {
        relativePath: 'animation',
    },
    Audio: {
        relativePath: 'audio',
    },
    AudioAnalyser: {
        relativePath: 'audio',
    },
    AudioBuffer: {
        relativePath: 'audio',
    },
    AudioListener: {
        relativePath: 'audio',
    },
    PositionalAudio: {
        relativePath: 'audio',
    },
    Camera: {
        relativePath: 'cameras',
    },
    CubeCamera: {
        relativePath: 'cameras',
    },
    OrthographicCamera: {
        relativePath: 'cameras',
    },
    PerspectiveCamera: {
        relativePath: 'cameras',
    },
    StereoCamera: {
        relativePath: 'cameras',
    },
    BufferAttribute: {
        relativePath: 'core',
    },
    BufferGeometry: {
        relativePath: 'core',
    },
    Clock: {
        relativePath: 'core',
    },
    DirectGeometry: {
        relativePath: 'core',
    },
    EventDispatcher: {
        relativePath: 'core',
    },
    Face3: {
        relativePath: 'core',
    },
    Geometry: {
        relativePath: 'core',
    },
    InstancedBufferAttribute: {
        relativePath: 'core',
    },
    InstancedBufferGeometry: {
        relativePath: 'core',
    },
    InstancedInterleavedBuffer: {
        relativePath: 'core',
    },
    InterleavedBuffer: {
        relativePath: 'core',
    },
    InterleavedBufferAttribute: {
        relativePath: 'core',
    },
    Layers: {
        relativePath: 'core',
    },
    Object3D: {
        relativePath: 'core',
    },
    Raycaster: {
        relativePath: 'core',
    },
    Uniform: {
        relativePath: 'core',
    },
    CurveUtils: {
        relativePath: 'extras',
    },
    SceneUtils: {
        relativePath: 'extras',
    },
    ShapeUtils: {
        relativePath: 'extras',
    },
    AmbientLight: {
        relativePath: 'lights',
    },
    DirectionalLight: {
        relativePath: 'lights',
    },
    HemisphereLight: {
        relativePath: 'lights',
    },
    Light: {
        relativePath: 'lights',
    },
    LightShadow: {
        relativePath: 'lights',
    },
    PointLight: {
        relativePath: 'lights',
    },
    SpotLight: {
        relativePath: 'lights',
    },
    AnimationLoader: {
        relativePath: 'loaders',
    },
    BinaryTextureLoader: {
        relativePath: 'loaders',
    },
    BufferGeometryLoader: {
        relativePath: 'loaders',
    },
    Cache: {
        relativePath: 'loaders',
    },
    CompressedTextureLoader: {
        relativePath: 'loaders',
    },
    CubeTextureLoader: {
        relativePath: 'loaders',
    },
    FontLoader: {
        relativePath: 'loaders',
    },
    ImageLoader: {
        relativePath: 'loaders',
    },
    JSONLoader: {
        relativePath: 'loaders',
    },
    Loader: {
        relativePath: 'loaders',
    },
    LoadingManager: {
        relativePath: 'loaders',
    },
    MaterialLoader: {
        relativePath: 'loaders',
    },
    ObjectLoader: {
        relativePath: 'loaders',
    },
    TextureLoader: {
        relativePath: 'loaders',
    },
    XHRLoader: {
        relativePath: 'loaders',
    },
    LineBasicMaterial: {
        relativePath: 'materials',
    },
    LineDashedMaterial: {
        relativePath: 'materials',
    },
    Material: {
        relativePath: 'materials',
    },
    MeshBasicMaterial: {
        relativePath: 'materials',
    },
    MeshDepthMaterial: {
        relativePath: 'materials',
    },
    MeshLambertMaterial: {
        relativePath: 'materials',
    },
    MeshNormalMaterial: {
        relativePath: 'materials',
    },
    MeshPhongMaterial: {
        relativePath: 'materials',
    },
    MeshStandardMaterial: {
        relativePath: 'materials',
    },
    MultiMaterial: {
        relativePath: 'materials',
    },
    PointsMaterial: {
        relativePath: 'materials',
    },
    RawShaderMaterial: {
        relativePath: 'materials',
    },
    ShaderMaterial: {
        relativePath: 'materials',
    },
    SpriteMaterial: {
        relativePath: 'materials',
    },
    Box2: {
        relativePath: 'math',
    },
    Box3: {
        relativePath: 'math',
    },
    Color: {
        relativePath: 'math',
    },
    Euler: {
        relativePath: 'math',
    },
    Frustum: {
        relativePath: 'math',
    },
    Interpolant: {
        relativePath: 'math',
    },
    Line3: {
        relativePath: 'math',
    },
    Math: {
        relativePath: 'math',
    },
    Matrix3: {
        relativePath: 'math',
    },
    Matrix4: {
        relativePath: 'math',
    },
    Plane: {
        relativePath: 'math',
    },
    Quaternion: {
        relativePath: 'math',
    },
    Ray: {
        relativePath: 'math',
    },
    Sphere: {
        relativePath: 'math',
    },
    Spherical: {
        relativePath: 'math',
    },
    Spline: {
        relativePath: 'math',
    },
    Triangle: {
        relativePath: 'math',
    },
    Vector2: {
        relativePath: 'math',
    },
    Vector3: {
        relativePath: 'math',
    },
    Vector4: {
        relativePath: 'math',
    },
    Bone: {
        relativePath: 'objects',
    },
    Group: {
        relativePath: 'objects',
    },
    LOD: {
        relativePath: 'objects',
    },
    LensFlare: {
        relativePath: 'objects',
    },
    Line: {
        relativePath: 'objects',
    },
    LineSegments: {
        relativePath: 'objects',
    },
    Mesh: {
        relativePath: 'objects',
    },
    Points: {
        relativePath: 'objects',
    },
    Skeleton: {
        relativePath: 'objects',
    },
    SkinnedMesh: {
        relativePath: 'objects',
    },
    Sprite: {
        relativePath: 'objects',
    },
    WebGLRenderTarget: {
        relativePath: 'renderers',
    },
    WebGLRenderTargetCube: {
        relativePath: 'renderers',
    },
    WebGLRenderer: {
        relativePath: 'renderers',
    },
    Fog: {
        relativePath: 'scenes',
    },
    FogExp2: {
        relativePath: 'scenes',
    },
    Scene: {
        relativePath: 'scenes',
    },
    CanvasTexture: {
        relativePath: 'textures',
    },
    CompressedTexture: {
        relativePath: 'textures',
    },
    CubeTexture: {
        relativePath: 'textures',
    },
    DataTexture: {
        relativePath: 'textures',
    },
    Texture: {
        relativePath: 'textures',
    },
    VideoTexture: {
        relativePath: 'textures',
    },
    BooleanKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    ColorKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    NumberKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    QuaternionKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    StringKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    VectorKeyframeTrack: {
        relativePath: 'animation/tracks',
    },
    Curve: {
        relativePath: 'extras/core',
    },
    CurvePath: {
        relativePath: 'extras/core',
    },
    Font: {
        relativePath: 'extras/core',
    },
    Path: {
        relativePath: 'extras/core',
    },
    Shape: {
        relativePath: 'extras/core',
    },
    ArcCurve: {
        relativePath: 'extras/curves',
    },
    CatmullRomCurve3: {
        relativePath: 'extras/curves',
    },
    ClosedSplineCurve3: {
        relativePath: 'extras/curves',
    },
    CubicBezierCurve: {
        relativePath: 'extras/curves',
    },
    CubicBezierCurve3: {
        relativePath: 'extras/curves',
    },
    EllipseCurve: {
        relativePath: 'extras/curves',
    },
    LineCurve: {
        relativePath: 'extras/curves',
    },
    LineCurve3: {
        relativePath: 'extras/curves',
    },
    QuadraticBezierCurve: {
        relativePath: 'extras/curves',
    },
    QuadraticBezierCurve3: {
        relativePath: 'extras/curves',
    },
    SplineCurve: {
        relativePath: 'extras/curves',
    },
    SplineCurve3: {
        relativePath: 'extras/curves',
    },
    BoxBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    BoxGeometry: {
        relativePath: 'extras/geometries',
    },
    CircleBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    CircleGeometry: {
        relativePath: 'extras/geometries',
    },
    CylinderBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    CylinderGeometry: {
        relativePath: 'extras/geometries',
    },
    DodecahedronGeometry: {
        relativePath: 'extras/geometries',
    },
    EdgesGeometry: {
        relativePath: 'extras/geometries',
    },
    ExtrudeGeometry: {
        relativePath: 'extras/geometries',
    },
    IcosahedronGeometry: {
        relativePath: 'extras/geometries',
    },
    LatheBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    LatheGeometry: {
        relativePath: 'extras/geometries',
    },
    OctahedronGeometry: {
        relativePath: 'extras/geometries',
    },
    ParametricGeometry: {
        relativePath: 'extras/geometries',
    },
    PlaneBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    PlaneGeometry: {
        relativePath: 'extras/geometries',
    },
    PolyhedronGeometry: {
        relativePath: 'extras/geometries',
    },
    RingBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    RingGeometry: {
        relativePath: 'extras/geometries',
    },
    ShapeGeometry: {
        relativePath: 'extras/geometries',
    },
    SphereBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    SphereGeometry: {
        relativePath: 'extras/geometries',
    },
    TetrahedronGeometry: {
        relativePath: 'extras/geometries',
    },
    TextGeometry: {
        relativePath: 'extras/geometries',
    },
    TorusBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    TorusGeometry: {
        relativePath: 'extras/geometries',
    },
    TorusKnotBufferGeometry: {
        relativePath: 'extras/geometries',
    },
    TorusKnotGeometry: {
        relativePath: 'extras/geometries',
    },
    TubeGeometry: {
        relativePath: 'extras/geometries',
    },
    WireframeGeometry: {
        relativePath: 'extras/geometries',
    },
    ArrowHelper: {
        relativePath: 'extras/helpers',
    },
    AxisHelper: {
        relativePath: 'extras/helpers',
    },
    BoundingBoxHelper: {
        relativePath: 'extras/helpers',
    },
    BoxHelper: {
        relativePath: 'extras/helpers',
    },
    CameraHelper: {
        relativePath: 'extras/helpers',
    },
    DirectionalLightHelper: {
        relativePath: 'extras/helpers',
    },
    EdgesHelper: {
        relativePath: 'extras/helpers',
    },
    FaceNormalsHelper: {
        relativePath: 'extras/helpers',
    },
    GridHelper: {
        relativePath: 'extras/helpers',
    },
    HemisphereLightHelper: {
        relativePath: 'extras/helpers',
    },
    PointLightHelper: {
        relativePath: 'extras/helpers',
    },
    SkeletonHelper: {
        relativePath: 'extras/helpers',
    },
    SpotLightHelper: {
        relativePath: 'extras/helpers',
    },
    VertexNormalsHelper: {
        relativePath: 'extras/helpers',
    },
    WireframeHelper: {
        relativePath: 'extras/helpers',
    },
    ImmediateRenderObject: {
        relativePath: 'extras/objects',
    },
    MorphBlendMesh: {
        relativePath: 'extras/objects',
    },
    CubicInterpolant: {
        relativePath: 'math/interpolants',
    },
    DiscreteInterpolant: {
        relativePath: 'math/interpolants',
    },
    LinearInterpolant: {
        relativePath: 'math/interpolants',
    },
    QuaternionLinearInterpolant: {
        relativePath: 'math/interpolants',
    },
    ShaderChunk: {
        relativePath: 'renderers/shaders',
    },
    ShaderLib: {
        relativePath: 'renderers/shaders',
    },
    UniformsLib: {
        relativePath: 'renderers/shaders',
    },
    UniformsUtils: {
        relativePath: 'renderers/shaders',
    },
    WebGLBufferRenderer: {
        relativePath: 'renderers/webgl',
    },
    WebGLCapabilities: {
        relativePath: 'renderers/webgl',
    },
    WebGLExtensions: {
        relativePath: 'renderers/webgl',
    },
    WebGLGeometries: {
        relativePath: 'renderers/webgl',
    },
    WebGLIndexedBufferRenderer: {
        relativePath: 'renderers/webgl',
    },
    WebGLLights: {
        relativePath: 'renderers/webgl',
    },
    WebGLObjects: {
        relativePath: 'renderers/webgl',
    },
    WebGLProgram: {
        relativePath: 'renderers/webgl',
    },
    WebGLPrograms: {
        relativePath: 'renderers/webgl',
    },
    WebGLProperties: {
        relativePath: 'renderers/webgl',
    },
    WebGLShader: {
        relativePath: 'renderers/webgl',
    },
    WebGLShadowMap: {
        relativePath: 'renderers/webgl',
    },
    WebGLState: {
        relativePath: 'renderers/webgl',
    },
    LensFlarePlugin: {
        relativePath: 'renderers/webgl/plugins',
    },
    SpritePlugin: {
        relativePath: 'renderers/webgl/plugins',
    },
};
