# Tandelorian Watering Schedule

## Purpose

This project improved my coding skills, helped me apply for an incredible apprenticeship opportunity, and acts as a plant-watering schedule for the good people at Tandem for 12 weeks starting December 16th.

## Parameters

The user can view which plants need watering on particular dates, based on JSON data regarding frequency of watering. Thankfully, Tandem sets wonderful work boundaries for their employees, so there will be no watering dates on weekends (which only puts off a plant's watering by 1 day or so). It is possible to water all the plants in one day; all will be watered on the first day.

## Get Started

Use npm start in terminal from within 'watering-scheduler'

## Technology

- React.js + moment.js package
- Node v12.13.1
- npm v6.13.3

## Known Issues

ComponentWillMount is an outdated lifecycle method that works in this setting because I needed the function to run and manipulate the data before the component finished mounting, but in future development I would stick with a more stable lifecycle method like ComponentDidMount and move my data to state and manipulate it from there. I also found that I couldn't get the dates to map in a list format, so that is why they are grouped together in a less user-friendly way.

## Future Development

- Create a "Today" view where user could see the plants that need watering that day
- Highlight today's date in the list of dates
- Viewable as group by date in a calendar or by plant
- Ability to enter name or list of names to rotate sign ups to water
- Assign people certain plants to water and only show that plant & its dates to that user when they enter their name
- Add new plants & their schedules to the app
- Check off completed waterings (if not checked, that plant's name rolls over to the next day)
