def calculate_quote(pet_profile):
    base_price = 15  # Base price in pounds for an hour per dog

    # Adjustments
    breed_adjustments = {
        'Labrador': 1.0,
        'German Shepherd': 1.1,
        'Bulldog': 1.2,
        'Chihuahua': 0.9,
    }

    size_adjustments = {
        'Small': 0.9,
        'Medium': 1.0,
        'Large': 1.1,
    }

    age_adjustments = lambda age: 1.2 if age < 1 or age > 8 else 1.0

    health_condition_adjustments = {
        'None': 1.0,
        'Chronic': 1.2,
    }

    behavioral_adjustment = lambda behavioral_notes: 1.2 if "aggressive" in behavioral_notes else 1.0

    # Calculate adjustments
    breed_factor = breed_adjustments.get(pet_profile['breed'], 1.0)
    size_factor = size_adjustments.get(pet_profile['size'], 1.0)
    age_factor = age_adjustments(pet_profile['age'])
    health_factor = max([health_condition_adjustments.get(condition, 1.0) for condition in pet_profile['healthConditions']])
    behavior_factor = behavioral_adjustment(pet_profile['behavioralNotes'])

    # Calculate final quote
    quote = base_price * breed_factor * size_factor * age_factor * health_factor * behavior_factor
    return round(quote, 2)

# Example pet profile
pet_profile = {
    "petName": "Rex",
    "breed": "Labrador",
    "age": 5,
    "size": "Large",
    "neutered": True,
    "healthConditions": ["None"],
    "behavioralNotes": ["Fear of loud noises"],
    "walkFrequency": "Daily",
    "walkDuration": "30 minutes",
    "preferredWalkTimeOfDay": "Morning"
}

quote = calculate_quote(pet_profile)



print("Pet Walking Service Quote")
print("--------------------------")
print(f"The quote for walking {pet_profile['petName']} is £{quote} per hour.")
