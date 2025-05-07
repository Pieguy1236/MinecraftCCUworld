onEvent('recipes', event => {
    event.shaped('iceandfire:hydra_skull', [
      'SSS',
      'S S',
      'SSS'
    ], {
      S: 'iceandfire:hydra_fang',
    })

    event.shaped('chaosawakens:big_bertha_blade', [
        ' FG',
        'CDE',
        'AB '
      ], {
        A: 'kubejs:caterkiller_jaw',
        B: 'chaosawakens:sea_viper_tongue',
        C: 'chaosawakens:vortex_eye',
        D: Item.of('chaosawakens:ultimate_sword').ignoreNBT(),
        E: 'kubejs:trex_tooth',
        F: 'chaosawakens:worm_tooth',
        G: 'kubejs:kraken_tooth',
    })
    
    event.shaped('chaosawakens:big_bertha_guard', [
        'FG ',
        'CDE',
        ' AB'
      ], {
        A: 'chaosawakens:moth_scale',
        B: 'chaosawakens:basilisk_scale',
        C: 'kubejs:jumpy_bug_scale',
        D: 'kubejs:melenoid_nose',
        E: 'chaosawakens:emperor_scorpion_scale',
        F: 'kubejs:sea_monster_scale',
        G: 'chaosawakens:nightmare_scale',
    })
    
    event.shaped('chaosawakens:big_bertha_handle', [
        '  E',
        'CD ',
        'AB '
      ], {
        A: 'chaosawakens:mantis_claw',
        B: 'chaosawakens:water_dragon_scale',
        C: 'chaosawakens:triffid_goo',
        D: 'chaosawakens:big_hammer',
        E: 'chaosawakens:ray_gun',
    })
    
    event.shaped('alexsmobs:warped_mixture', [
      'AAA',
      'ACA',
      'ABA'
    ], {
      A: 'minecraft:warped_fungus',
      B: 'minecraft:glass_bottle',
      C: 'minecraft:golden_apple',
  })


  event.shapeless(
    Item.of('kubejs:ultimate_core'),
    [
      'chaosawakens:titanium_ingot',
      'chaosawakens:uranium_ingot',
    ]
  )

  event.shapeless(
    Item.of('kubejs:condensed_blood'),
    [
      'chaosawakens:bloodstone_block',
      'tconstruct:blood_slime_ball',
      'twilightforest:fiery_tears',
      'twilightforest:fiery_blood',
      
    ]
  )

  event.shaped('chaosawakens:royal_guardian_sword', [
    ' B ',
    'AEC',
    ' D '
  ], {
    A: 'kubejs:great_goat_horn',
    B: 'kubejs:awakened_eye',
    C: 'kubejs:ancient_netherite_ingot',
    D: 'kubejs:blightened_ice',
    E: Item.of('chaosawakens:big_bertha').ignoreNBT()

})

event.shaped('16x chaosawakens:royal_guardian_scale', [
  'BCB',
  'CAC',
  'BCB'
], {
  A: 'kubejs:chaotic_guardian_chunk',
  B: 'chaosawakens:uranium_block',
  C: 'chaosawakens:titanium_block',
})


  })
