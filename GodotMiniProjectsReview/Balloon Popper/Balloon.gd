extends Area3D

var increase_size : float = 0.2
@export var clicks_to_pop : int = 3
var points_to_give : int = 1

func _on_input_event(camera, event, position, normal, shape_idx):
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT : 
		scale += Vector3.ONE * increase_size
		clicks_to_pop -= 1
		
		if clicks_to_pop == 0 :
			get_node("/root/Main").increase_score(points_to_give)
			queue_free()
		
