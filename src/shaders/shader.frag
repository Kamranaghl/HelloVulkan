#version 450

layout(location = 0) out vec4 out_color;

layout(push_constant) uniform PushConstant {
    vec2 window_size;
} push_constant;

void main() {
   out_color = vec4(gl_FragCoord.xy / push_constant.window_size, 0.0, 1.0);
}