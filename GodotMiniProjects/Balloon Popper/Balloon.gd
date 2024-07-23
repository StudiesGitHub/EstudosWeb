extends Area3D

@export var clicks_to_pops : int = 5 
@export var size_increase : float = 0.2
@export var score_to_give : int = 1

func _on_input_event(camera, event, position, normal, shape_idx):
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
		scale += Vector3.ONE * size_increase
		clicks_to_pops -= 1
		
		if clicks_to_pops == 0:
			get_node("/root/Main").increase_score(score_to_give)
			queue_free()
