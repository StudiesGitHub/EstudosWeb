extends RigidBody2D

var velocity : int = 5000
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT) :
		var dir = global_position.direction_to(get_global_mouse_position())
		apply_impulse(velocity * dir)
		
